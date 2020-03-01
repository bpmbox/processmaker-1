<Activity mc:Ignorable="sap sap2010" x:Class="Main" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities" xmlns:s="clr-namespace:System;assembly=mscorlib" xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation" xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib" xmlns:sd="clr-namespace:System.Data;assembly=System.Data" xmlns:ui="http://schemas.uipath.com/workflow/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <x:Members>
    <x:Property Name="テンプレートファイル" Type="InArgument(x:String)" />
    <x:Property Name="テンプレートシート" Type="InArgument(x:String)" />
    <x:Property Name="マッピングデータ" Type="InArgument(x:String)" />
    <x:Property Name="実行パターン" Type="InArgument(x:String)" />
    <x:Property Name="in_ファイル名" Type="InArgument(x:String)" />
  </x:Members>
  <mva:VisualBasic.Settings>
    <x:Null />
  </mva:VisualBasic.Settings>
  <sap:VirtualizedContainerService.HintSize>495.2,2618.4</sap:VirtualizedContainerService.HintSize>
  <sap2010:WorkflowViewState.IdRef>Main_1</sap2010:WorkflowViewState.IdRef>
  <TextExpression.NamespacesForImplementation>
    <scg:List x:TypeArguments="x:String" Capacity="22">
      <x:String>System.Activities</x:String>
      <x:String>System.Activities.Statements</x:String>
      <x:String>System.Activities.Expressions</x:String>
      <x:String>System.Activities.Validation</x:String>
      <x:String>System.Activities.XamlIntegration</x:String>
      <x:String>Microsoft.VisualBasic</x:String>
      <x:String>Microsoft.VisualBasic.Activities</x:String>
      <x:String>System</x:String>
      <x:String>System.Collections</x:String>
      <x:String>System.Collections.Generic</x:String>
      <x:String>System.Data</x:String>
      <x:String>System.Diagnostics</x:String>
      <x:String>System.Drawing</x:String>
      <x:String>System.IO</x:String>
      <x:String>System.Linq</x:String>
      <x:String>System.Net.Mail</x:String>
      <x:String>System.Xml</x:String>
      <x:String>System.Xml.Linq</x:String>
      <x:String>UiPath.Core</x:String>
      <x:String>UiPath.Core.Activities</x:String>
      <x:String>System.Windows.Markup</x:String>
      <x:String>UiPath.Excel</x:String>
    </scg:List>
  </TextExpression.NamespacesForImplementation>
  <TextExpression.ReferencesForImplementation>
    <scg:List x:TypeArguments="AssemblyReference" Capacity="18">
      <AssemblyReference>System.Activities</AssemblyReference>
      <AssemblyReference>Microsoft.VisualBasic</AssemblyReference>
      <AssemblyReference>mscorlib</AssemblyReference>
      <AssemblyReference>System.Data</AssemblyReference>
      <AssemblyReference>System.Data.DataSetExtensions</AssemblyReference>
      <AssemblyReference>System</AssemblyReference>
      <AssemblyReference>System.Drawing</AssemblyReference>
      <AssemblyReference>System.Core</AssemblyReference>
      <AssemblyReference>System.Xml</AssemblyReference>
      <AssemblyReference>System.Xml.Linq</AssemblyReference>
      <AssemblyReference>PresentationFramework</AssemblyReference>
      <AssemblyReference>WindowsBase</AssemblyReference>
      <AssemblyReference>PresentationCore</AssemblyReference>
      <AssemblyReference>System.Xaml</AssemblyReference>
      <AssemblyReference>UiPath.System.Activities</AssemblyReference>
      <AssemblyReference>UiPath.UiAutomation.Activities</AssemblyReference>
      <AssemblyReference>UiPath.Excel.Activities</AssemblyReference>
      <AssemblyReference>UiPath.Excel</AssemblyReference>
    </scg:List>
  </TextExpression.ReferencesForImplementation>
  <Sequence DisplayName="Main" sap:VirtualizedContainerService.HintSize="475.2,2558.4" sap2010:WorkflowViewState.IdRef="Sequence_1">
    <Sequence.Variables>
      <Variable x:TypeArguments="scg:Dictionary(x:String, x:String)" Default="[new Dictionary(Of String,String)]" Name="pDictionnary" />
      <Variable x:TypeArguments="s:String[]" Name="arrayFileName" />
    </Sequence.Variables>
    <sap:WorkflowViewStateService.ViewState>
      <scg:Dictionary x:TypeArguments="x:String, x:Object">
        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
      </scg:Dictionary>
    </sap:WorkflowViewStateService.ViewState>
    <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="433.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_2" UnSafe="False" WorkflowFileName="log\logManager.xaml">
      <ui:InvokeWorkflowFile.Arguments>
        <InArgument x:TypeArguments="x:String" x:Key="argsLogData">転記シート明細開始</InArgument>
      </ui:InvokeWorkflowFile.Arguments>
    </ui:InvokeWorkflowFile>
    <Assign sap2010:Annotation.AnnotationText="フレームワークの設定値から読み込み&#xA;dic(&quot;テンプレートファイル&quot;)&#xA;&#xA;&quot;Input\テンプレート.xlsx&quot;" sap:VirtualizedContainerService.HintSize="433.6,132.8" sap2010:WorkflowViewState.IdRef="Assign_1">
      <Assign.To>
        <OutArgument x:TypeArguments="x:String">[テンプレートファイル]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="x:String">パラメーター.xlsx</InArgument>
      </Assign.Value>
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </Assign>
    <Assign sap2010:Annotation.AnnotationText="パラメーターファイルによって動作の切り替え&#xA;パラメーター１　明細から迷彩&#xA;パラメーター２　単票から明細&#xA;パラメーター３　明細から単票" sap:VirtualizedContainerService.HintSize="433.6,132.8" sap2010:WorkflowViewState.IdRef="Assign_2">
      <Assign.To>
        <OutArgument x:TypeArguments="x:String">[テンプレートシート]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="x:String">パラメーター</InArgument>
      </Assign.Value>
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </Assign>
    <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="MAPの値を読んでデータテーブルに展開する&#xA;読み込む　場所の設定をする&#xA;余計な項目がある為&#xA;入力　&quot;C:\Users\USER\Documents\Book1.xlsx&quot;&#xA;出力　MAP {DataTable}&#xA;&#xA;ディクショナリーから読み込む" DisplayName="テンプレート初期化 DictionNaryの値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="433.6,795.2" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_1" Visible="False" WorkbookPath="[テンプレートファイル]">
      <ui:ExcelApplicationScope.Body>
        <ActivityAction x:TypeArguments="ui:WorkbookApplication">
          <ActivityAction.Argument>
            <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
          </ActivityAction.Argument>
          <Sequence DisplayName="データテーブルへの読み込み（Do）" sap:VirtualizedContainerService.HintSize="396.8,567.2" sap2010:WorkflowViewState.IdRef="Sequence_3">
            <Sequence.Variables>
              <Variable x:TypeArguments="sd:DataTable" Name="マッピングデータ" />
            </Sequence.Variables>
            <sap:WorkflowViewStateService.ViewState>
              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
              </scg:Dictionary>
            </sap:WorkflowViewStateService.ViewState>
            <ui:ExcelReadRange AddHeaders="False" sap2010:Annotation.AnnotationText="固定値&#xA;Output　DtParam" DataTable="[マッピングデータ]" DisplayName="マップデータの読み込み(Read Range)" sap:VirtualizedContainerService.HintSize="355.2,102.4" sap2010:WorkflowViewState.IdRef="ExcelReadRange_1" Range="A1" SheetName="[テンプレートシート]">
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </ui:ExcelReadRange>
            <ui:ForEachRow CurrentIndex="{x:Null}" DataTable="[マッピングデータ]" DisplayName="For Each Row" sap:VirtualizedContainerService.HintSize="355.2,332" sap2010:WorkflowViewState.IdRef="ForEachRow_1">
              <ui:ForEachRow.Body>
                <ActivityAction x:TypeArguments="sd:DataRow">
                  <ActivityAction.Argument>
                    <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                  </ActivityAction.Argument>
                  <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_2">
                    <sap:WorkflowViewStateService.ViewState>
                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                      </scg:Dictionary>
                    </sap:WorkflowViewStateService.ViewState>
                    <Assign sap2010:Annotation.AnnotationText="ディクショナリーに追加" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_3">
                      <Assign.To>
                        <OutArgument x:TypeArguments="x:String">[pDictionnary(row(0).ToString)]</OutArgument>
                      </Assign.To>
                      <Assign.Value>
                        <InArgument x:TypeArguments="x:String">[row(1).ToString]</InArgument>
                      </Assign.Value>
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                    </Assign>
                  </Sequence>
                </ActivityAction>
              </ui:ForEachRow.Body>
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </ui:ForEachRow>
          </Sequence>
        </ActivityAction>
      </ui:ExcelApplicationScope.Body>
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
          <x:Boolean x:Key="IsPinned">False</x:Boolean>
          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </ui:ExcelApplicationScope>
    <Assign sap:VirtualizedContainerService.HintSize="433.6,60" sap2010:WorkflowViewState.IdRef="Assign_4">
      <Assign.To>
        <OutArgument x:TypeArguments="s:String[]">[arrayFileName]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="s:String[]">[System.io.Directory.GetFiles(pDictionnary("Inputファイルパス"))]</InArgument>
      </Assign.Value>
    </Assign>
    <ui:ForEach x:TypeArguments="x:Object" CurrentIndex="{x:Null}" DisplayName="For Each" sap:VirtualizedContainerService.HintSize="433.6,1056.8" sap2010:WorkflowViewState.IdRef="ForEach`1_1" Values="[arrayFileName]">
      <ui:ForEach.Body>
        <ActivityAction x:TypeArguments="x:Object">
          <ActivityAction.Argument>
            <DelegateInArgument x:TypeArguments="x:Object" Name="item" />
          </ActivityAction.Argument>
          <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="375.2,923.2" sap2010:WorkflowViewState.IdRef="Sequence_4">
            <Sequence.Variables>
              <Variable x:TypeArguments="ui:GenericValue" Name="fileName" />
            </Sequence.Variables>
            <sap:WorkflowViewStateService.ViewState>
              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
              </scg:Dictionary>
            </sap:WorkflowViewStateService.ViewState>
            <Assign sap2010:Annotation.AnnotationText="処理対象ファイル名の取得" sap:VirtualizedContainerService.HintSize="333.6,91.2" sap2010:WorkflowViewState.IdRef="Assign_5">
              <Assign.To>
                <OutArgument x:TypeArguments="ui:GenericValue">[fileName]</OutArgument>
              </Assign.To>
              <Assign.Value>
                <InArgument x:TypeArguments="ui:GenericValue">[System.IO.Path.GetFileName(item.ToString)]</InArgument>
              </Assign.Value>
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </Assign>
            <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_3" Text="[fileName]" TopMost="True" />
            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_3" UnSafe="False" WorkflowFileName="log\logManager.xaml">
              <ui:InvokeWorkflowFile.Arguments>
                <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="ログ内容">転記開始</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">["登録するファイルは"+fileName]</InArgument>
              </ui:InvokeWorkflowFile.Arguments>
            </ui:InvokeWorkflowFile>
            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" sap2010:Annotation.AnnotationText="明細から明細へ転記　条件１０&#xD;&#xA;マップシート　ＭＡＰ　出力" DisplayName="Invoke core転地 workflow" sap:VirtualizedContainerService.HintSize="333.6,130.4" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_1" UnSafe="True" WorkflowFileName="controller/controllerConvert.xaml">
              <ui:InvokeWorkflowFile.Arguments>
                <InArgument x:TypeArguments="x:Int32" x:Key="in_判定条件">10</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="in_入力ファイル">入力.xlsx</InArgument>
                <InArgument x:TypeArguments="scg:Dictionary(x:String, x:String)" x:Key="dic">[pDictionnary]</InArgument>
              </ui:InvokeWorkflowFile.Arguments>
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </ui:InvokeWorkflowFile>
            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" sap2010:Annotation.AnnotationText="単票から明細へ転記　条件３&#xD;&#xA;マップシート３　ＭＡＰ３　出力3" DisplayName="Invoke core転地 workflow" sap:VirtualizedContainerService.HintSize="333.6,130.4" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_4" UnSafe="True" WorkflowFileName="controller/controllerConvert.xaml">
              <ui:InvokeWorkflowFile.Arguments>
                <InArgument x:TypeArguments="x:Int32" x:Key="in_判定条件">3</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="in_入力ファイル">入力.xlsx</InArgument>
                <InArgument x:TypeArguments="scg:Dictionary(x:String, x:String)" x:Key="dic">[pDictionnary]</InArgument>
              </ui:InvokeWorkflowFile.Arguments>
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </ui:InvokeWorkflowFile>
            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" sap2010:Annotation.AnnotationText="明細から単票へ転記　条件１&#xD;&#xA;マップシート１　ＭＡＰ１　出力1" DisplayName="Invoke core転地 workflow" sap:VirtualizedContainerService.HintSize="333.6,130.4" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_5" UnSafe="True" WorkflowFileName="controller/controllerConvert.xaml">
              <ui:InvokeWorkflowFile.Arguments>
                <InArgument x:TypeArguments="x:Int32" x:Key="in_判定条件">1</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="in_入力ファイル">入力.xlsx</InArgument>
                <InArgument x:TypeArguments="scg:Dictionary(x:String, x:String)" x:Key="dic">[pDictionnary]</InArgument>
              </ui:InvokeWorkflowFile.Arguments>
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
            </ui:InvokeWorkflowFile>
          </Sequence>
        </ActivityAction>
      </ui:ForEach.Body>
    </ui:ForEach>
  </Sequence>
</Activity>