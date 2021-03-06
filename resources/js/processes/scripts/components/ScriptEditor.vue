<template>
  <b-container class="h-100">
    <b-card no-body class="h-100">
      <b-card-header class="text-right">
        <b-button title="Save Script" @click="save" size="sm">
          <i class="fas fa-save" />
        </b-button>
      </b-card-header>

      <b-card-body class="overflow-hidden p-4">
        <b-row class="h-100">
          <b-col cols="9" class="h-100">
            <monaco-editor
              :options="monacoOptions"
              v-model="code"
              :language="script.language"
              class="h-100"
              :class="{hidden: resizing}"
            />
          </b-col>
          <b-col cols="3" class="h-100">
            <b-card no-body class="h-100">
              <b-card-header class="light-gray-background">
                <b-row class="d-flex align-items-center">
                  <b-col>{{ $t('Debugger') }}</b-col>

                  <b-col align-self="end" class="text-right">
                    <b-button
                      class="text-capitalize pl-3 pr-3"
                      :disabled="preview.executing"
                      @click="execute"
                      size="sm"
                    >
                      <i class="fas fa-caret-square-right" />
                      {{ $t('Run') }}
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-header>

              <b-card-body class="overflow-hidden p-0">
                <b-list-group class="w-100 h-100 overflow-auto">
                  <b-list-group-item class="script-toggle border-0 mb-0">
                    <b-row v-b-toggle.configuration>
                      <b-col>
                        <i class="fas fa-cog" />
                        {{ $t('Configuration') }}
                      </b-col>
                      <b-col align-self="end" cols="1" class="mr-2">
                        <i class="fas fa-chevron-down accordion-icon" />
                      </b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item class="p-0 border-left-0 border-right-0 border-top-0 mb-0">
                    <b-collapse id="configuration">
                      <monaco-editor
                        :options="{ ...monacoOptions, minimap: { enabled: false } }"
                        v-model="preview.config"
                        language="json"
                        class="editor-inspector"
                        :class="{hidden: resizing}"
                      />
                    </b-collapse>
                  </b-list-group-item>

                  <b-list-group-item class="script-toggle border-0 mb-0">
                    <b-row v-b-toggle.input>
                      <b-col>
                        <i class="fas fa-sign-in-alt" />
                        {{ $t('Sample Input') }}
                      </b-col>
                      <b-col align-self="end" cols="1" class="mr-2">
                        <i class="fas fa-chevron-down accordion-icon" />
                      </b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item class="p-0 border-left-0 border-right-0 border-top-0 mb-0">
                    <b-collapse id="input">
                      <monaco-editor
                        :options="{ ...monacoOptions, minimap: { enabled: false } }"
                        v-model="preview.data"
                        language="json"
                        class="editor-inspector"
                        :class="{hidden: resizing}"
                      />
                    </b-collapse>
                  </b-list-group-item>

                  <b-list-group-item class="script-toggle border-0 mb-0">
                    <b-row
                      :class="outputOpen ? null : 'collapsed'"
                      :aria-expanded="outputOpen ? 'true' : 'false'"
                      aria-controls="output"
                      @click="outputOpen = !outputOpen"
                    >
                      <b-col>
                        <i class="far fa-caret-square-right" />
                        {{ $t('Output') }}
                      </b-col>
                      <b-col align-self="end" cols="1" class="mr-2">
                        <i class="fas fa-chevron-down accordion-icon" />
                      </b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item class="p-0 border-left-0 border-right-0 border-top-0 mb-0">
                    <b-collapse id="output" class="bg-dark" :visible="outputOpen">
                      <div class="output text-white">
                        <pre v-if="preview.success" class="text-white"><samp>{{ preview.output }}</samp></pre>
                        <div v-if="preview.failure">
                          <div class="text-light bg-danger">{{preview.error.exception}}</div>
                          <div class="text-light text-monospace small">{{preview.error.message}}</div>
                        </div>
                      </div>
                    </b-collapse>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-card-body>

      <b-card-footer class="d-flex">
        <span class="text-secondary text-sm">
          Language:
          <span class="text-uppercase">{{ script.language }}</span>
        </span>
        <span class="ml-auto">
          <i v-if="preview.executing" class="fas fa-spinner fa-spin"></i>
          <i v-if="preview.success" class="fas fa-check text-success"></i>
          <i v-if="preview.failure" class="fas fa-times-circle text-danger"></i>
        </span>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script>
import MonacoEditor from "vue-monaco";
import _ from "lodash";

export default {
  props: ["process", "script", "scriptFormat"],
  data() {
    return {
      resizing: false,
      monacoOptions: {
        automaticLayout: true
      },
      code: this.script.code,
      preview: {
        executing: false,
        data: "{}",
        config: "{}",
        output: "",
        success: false,
        failure: false
      },
      outputOpen: true
    };
  },
  watch: {
    "preview.output"(output) {
      if (output && !this.outputOpen) {
        this.outputOpen = true;
      }
    }
  },
  components: {
    MonacoEditor
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    let userID = document.head.querySelector('meta[name="user-id"]');
    window.Echo.private(
      `ProcessMaker.Models.User.${userID.content}`
    ).notification(response => {
      this.outputResponse(response);
    });
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    outputResponse(response) {
      this.preview.output = response.response;

      if (response.status === 200) {
        this.preview.executing = false;
        this.preview.success = true;
      } else {
        this.preview.executing = false;
        this.preview.failure = true;
        this.preview.error = response.response;
      }
    },
    stopResizing: _.debounce(function() {
      this.resizing = false;
    }, 50),
    handleResize() {
      this.resizing = true;
      this.stopResizing();
    },
    execute() {
      this.preview.executing = true;
      this.preview.success = false;
      this.preview.failure = false;
      this.preview.output = undefined;
      // Attempt to execute a script, using our temp variables
      ProcessMaker.apiClient.post("scripts/" + this.script.id + "/preview", {
        code: this.code,
        language: this.script.language,
        data: this.preview.data,
        config: this.preview.config,
        timeout: this.script.timeout
      });
    },
    onClose() {
      window.location.href = "/designer/scripts";
    },
    save() {
      ProcessMaker.apiClient
        .put("scripts/" + this.script.id, {
          code: this.code,
          title: this.script.title,
          description: this.script.description,
          language: this.script.language,
          run_as_user_id: this.script.run_as_user_id,
          timeout: this.script.timeout,
          description: this.script.description
        })
        .then(response => {
          ProcessMaker.alert(this.$t("The script was saved."), "success");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  padding: 0 0 0 0;
}

.script-toggle {
  cursor: pointer;
  user-select: none;
  background: #f7f7f7;
}

.accordion-icon {
  transition: all 200ms;
}

.collapsed .accordion-icon {
  transform: rotate(-90deg);
}

.editor-inspector {
  height: 200px;
}

.output {
  min-height: 300px;
}
</style>
