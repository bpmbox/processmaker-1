<template>
  <div>
    <label v-uni-for="name">{{ label }}</label>

    <uploader
      :options="options"
      ref="uploader"
      @complete="complete"
      @upload-start="start"
      @file-removed="removed"
      @file-success="fileUploaded"
    >
      <uploader-unsupport></uploader-unsupport>

      <uploader-drop id="uploaderMain" class="form-control-file">
        <p>{{$t('Drop a file here to upload or')}}</p>
        <uploader-btn id="submitFile" class="btn btn-secondary text-white">{{$t('select file')}}</uploader-btn>
      </uploader-drop>

      <uploader-list></uploader-list>
    </uploader>

    <div class="invalid-feedback" v-if="error">{{error}}</div>
    <small v-if="helper" class="form-text text-muted">{{helper}}</small>
  </div>
</template>

<script>
import { createUniqIdsMixin } from "vue-uniq-ids";
import uploader from "vue-simple-uploader";

// Create the mixin
const uniqIdsMixin = createUniqIdsMixin();

export default {
  components: uploader,
  mixins: [uniqIdsMixin],
  props: ["label", "error", "helper", "name", "value", "controlClass", "endpoint"],
  beforeMount() {
    this.getFileType();
  },
  mounted() {
    // we need to be able to remove the classes from the npm package
    document
      .querySelectorAll("[id='submitFile'],[id='uploaderMain']")
      .forEach(element => {
        element.classList.remove("uploader-btn", "uploader-drop");
      });
  },
  computed: {
    classList() {
      return {
        "is-invalid": (this.validator && this.validator.errorCount) || this.error,
        [this.controlClass]: !!this.controlClass,
      }
    },
    inProgress() {
      return this.$refs.uploader.fileList.some(file => file._prevProgress < 1);
    },
  },
  data() {
    return {
      content: "",
      fileType: null,
      validator: {
        errorCount: 0,
        errors: [],
      },
      options: {
        target: this.getTargetUrl,
        // We cannot increase this until laravel chunk uploader handles this gracefully
        simultaneousUploads: 1,
        query: {
          chunk: true,
          data_name: this.name
        },
        testChunks: false,
        // Setup our headers to deal with API calls
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": window.ProcessMaker.apiClient.defaults.headers.common["X-CSRF-TOKEN"]
        },
        singleFile: true
      },
    };
  },
  methods: {
    getFileType() {
      if (document.head.querySelector('meta[name="request-id"]')) {
        this.fileType = 'request';
      }
      
      if (document.head.querySelector('meta[name="collection-id"]')) {
        this.fileType = 'collection';
      }
    },
    fileUploaded(rootFile, file, message) {
      if (this.fileType == 'request') {
        this.$emit("input", file.name);
      }
      
      if (this.fileType == 'collection') {
        message = JSON.parse(message);
        this.$emit("input", {
          id: message.id,
          name: message.file_name
        });
      }
    },
    removed() {
      if (!this.inProgress) {
        this.complete();
      }
    },
    complete() {
      // Unblock submit
      this.validator.errorCount = 0;
      window.onbeforeunload = function() {};
    },
    start() {
      // Block submit until files are loaded
      this.validator.errorCount = 1;
      window.onbeforeunload = function() {
        return true;
      };
    },
    getTargetUrl() {
      if (this.endpoint) {
        return this.endpoint;
      }
      
      if (this.fileType == 'request') {
        const requestIDNode = document.head.querySelector('meta[name="request-id"]');

        return requestIDNode
          ? `/api/1.0/requests/${requestIDNode.content}/files`
          : null;  
      }
      
      if (this.fileType == 'collection') {
        const collectionIdNode = document.head.querySelector('meta[name="collection-id"]');

        return collectionIdNode
          ? '/api/1.0/files' +
            '?model=' +
            'ProcessMaker\\Plugins\\Collections\\Models\\Collection' +
            '&model_id=' +
            collectionIdNode.content +
            '&collection=' +
            'collection'
          : null;  
      }
    }
  }
};
</script>
