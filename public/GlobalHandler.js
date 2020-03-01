<Activity mc:Ignorable="sap sap2010" x:Class="GlobalHandler" this:GlobalHandler.debug="0" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities" xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation" xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib" xmlns:sd="clr-namespace:System.Data;assembly=System.Data" xmlns:this="clr-namespace:" xmlns:ui="http://schemas.uipath.com/workflow/activities" xmlns:uico="http://schemas.uipath.com/workflow/activities/contracts" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <x:Members>
    <x:Property Name="errorInfo" Type="InArgument(uico:ExceptionHandlerArgs)">
      <x:Property.Attributes>
        <RequiredArgumentAttribute />
      </x:Property.Attributes>
    </x:Property>
    <x:Property Name="result" Type="OutArgument(uico:ErrorAction)">
      <x:Property.Attributes>
        <RequiredArgumentAttribute />
      </x:Property.Attributes>
    </x:Property>
    <x:Property Name="debug" Type="InArgument(x:Int32)" />
  </x:Members>
  <mva:VisualBasic.Settings>
    <x:Null />
  </mva:VisualBasic.Settings>
  <sap:VirtualizedContainerService.HintSize>472,1582.4</sap:VirtualizedContainerService.HintSize>
  <sap2010:WorkflowViewState.IdRef>GEX_1</sap2010:WorkflowViewState.IdRef>
  <TextExpression.NamespacesForImplementation>
    <scg:List x:TypeArguments="x:String" Capacity="44">
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
      <x:String>System.Windows.Markup</x:String>
      <x:String>UiPath.Core</x:String>
      <x:String>UiPath.Core.Activities</x:String>
      <x:String>UiPath.Activities.Contracts</x:String>
      <x:String>Microsoft.VisualBasic.CompilerServices</x:String>
    </scg:List>
  </TextExpression.NamespacesForImplementation>
  <TextExpression.ReferencesForImplementation>
    <scg:List x:TypeArguments="AssemblyReference" Capacity="44">
      <AssemblyReference>System.Activities</AssemblyReference>
      <AssemblyReference>Microsoft.VisualBasic</AssemblyReference>
      <AssemblyReference>mscorlib</AssemblyReference>
      <AssemblyReference>System.Data</AssemblyReference>
      <AssemblyReference>System</AssemblyReference>
      <AssemblyReference>System.Drawing</AssemblyReference>
      <AssemblyReference>System.Core</AssemblyReference>
      <AssemblyReference>System.Xml</AssemblyReference>
      <AssemblyReference>System.Xml.Linq</AssemblyReference>
      <AssemblyReference>PresentationFramework</AssemblyReference>
      <AssemblyReference>WindowsBase</AssemblyReference>
      <AssemblyReference>PresentationCore</AssemblyReference>
      <AssemblyReference>System.Xaml</AssemblyReference>
      <AssemblyReference>UiPath.UiAutomation.Activities</AssemblyReference>
      <AssemblyReference>UiPath.System.Activities</AssemblyReference>
      <AssemblyReference>System.ServiceModel</AssemblyReference>
      <AssemblyReference>UiPath.Excel</AssemblyReference>
      <AssemblyReference>System.ValueTuple</AssemblyReference>
      <AssemblyReference>UiPath.Activities.Contracts</AssemblyReference>
      <AssemblyReference>UiPath.Mail</AssemblyReference>
      <AssemblyReference>UiPath.Studio.Plugin.Workflow</AssemblyReference>
      <AssemblyReference>System.ComponentModel.Composition</AssemblyReference>
      <AssemblyReference>UiPath.Java.Activities</AssemblyReference>
      <AssemblyReference>UiPath.Python</AssemblyReference>
      <AssemblyReference>System.Runtime.WindowsRuntime</AssemblyReference>
    </scg:List>
  </TextExpression.ReferencesForImplementation>
  <Sequence sap2010:Annotation.AnnotationText="This sequence will be run when the process encounters an unmanaged error. We recommend you to log the errors, save the state of the process and let the process be killed in order to avoid running on faulted environments.&#xA;&#xA;Note:  Make sure that the 'errorInfo' and 'result' arguments are not removed." DisplayName="Global Exception Handler" sap:VirtualizedContainerService.HintSize="452,1522.4" sap2010:WorkflowViewState.IdRef="Sequence_1">
    <Sequence.Variables>
      <Variable x:TypeArguments="x:String" Name="answer" />
      <Variable x:TypeArguments="x:Int32" Default="0" Name="retry" />
      <Variable x:TypeArguments="x:Int32" Name="retryCount" />
      <Variable x:TypeArguments="x:String" Name="failedActivity" />
      <Variable x:TypeArguments="ui:Image" Name="image" />
      <Variable x:TypeArguments="x:String" Name="imPath" />
      <Variable x:TypeArguments="sd:DataTable" Name="errors" />
      <Variable x:TypeArguments="x:String" Name="DSN" />
      <Variable x:TypeArguments="x:String" Name="errid">
        <Variable.Default>
          <Literal x:TypeArguments="x:String" Value="" />
        </Variable.Default>
      </Variable>
      <Variable x:TypeArguments="x:String" Name="mailToErr" />
      <Variable x:TypeArguments="x:String" Name="errManagement" />
      <Variable x:TypeArguments="x:String" Name="errHachuu" />
      <Variable x:TypeArguments="x:String" Name="errErr" />
      <Variable x:TypeArguments="x:String" Name="HONBAN" />
      <Variable x:TypeArguments="x:String" Name="prefix" />
      <Variable x:TypeArguments="x:String" Name="ErrST" />
      <Variable x:TypeArguments="x:String" Name="IkouSt" />
      <Variable x:TypeArguments="x:String" Name="CreateDate" />
      <Variable x:TypeArguments="x:String" Name="MachineName" />
      <Variable x:TypeArguments="x:String" Default="ERR" Name="ErrTxt" />
      <Variable x:TypeArguments="ui:GenericValue" Name="xamlName" />
      <Variable x:TypeArguments="x:String" Name="Process" />
      <Variable x:TypeArguments="x:String" Name="filePath" />
    </Sequence.Variables>
    <sap:WorkflowViewStateService.ViewState>
      <scg:Dictionary x:TypeArguments="x:String, x:Object">
        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
        <x:Boolean x:Key="IsAnnotationDocked">False</x:Boolean>
      </scg:Dictionary>
    </sap:WorkflowViewStateService.ViewState>
    <ui:GetEnvironmentVariable DisplayName="Get Environment Variable" sap:VirtualizedContainerService.HintSize="410.4,60" sap2010:WorkflowViewState.IdRef="GetEnvironmentVariable_1" Variable="[”CurrentDirectory”]" VariableValue="[filePath]" />
    <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="410.4,60" sap2010:WorkflowViewState.IdRef="MessageBox_27" Text="[&quot;test&quot;]" TopMost="True" />
    <Assign sap:VirtualizedContainerService.HintSize="410.4,60" sap2010:WorkflowViewState.IdRef="Assign_18">
      <Assign.To>
        <OutArgument x:TypeArguments="x:String">[filePath]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="x:String">[filePath+"\"]</InArgument>
      </Assign.Value>
    </Assign>
    <ui:AppendLine sap2010:Annotation.AnnotationText="時間の取得" DisplayName="Append Line" FileName="logfile\ERROR.txt" sap:VirtualizedContainerService.HintSize="410.4,88" sap2010:WorkflowViewState.IdRef="AppendLine_4" Text="[&quot;■エラー発祥時間　&quot;+DateTime.Now.ToString(&quot;yyyy/MM/dd/ HH:mm:ss&quot;)+&quot;エラーファイル名&quot;+errorInfo.ActivityInfo.Name+&quot; エラー内容  &quot;+errorInfo.Exception.ToString]">
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsAnnotationDocked">False</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </ui:AppendLine>
    <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="410.4,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_27" UnSafe="False" WorkflowFileName="log\logManager.xaml">
      <ui:InvokeWorkflowFile.Arguments>
        <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="ログ内容">転記開始</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="ログ詳細" xml:space="preserve">["■エラー発祥時間　"+DateTime.Now.ToString("yyyy/MM/dd/ HH:mm:ss")+"エラーファイル名"+errorInfo.ActivityInfo.Name+" エラー内容  "+errorInfo.Exception.ToString]</InArgument>
      </ui:InvokeWorkflowFile.Arguments>
    </ui:InvokeWorkflowFile>
    <Assign sap:VirtualizedContainerService.HintSize="410.4,60" sap2010:WorkflowViewState.IdRef="Assign_17">
      <Assign.To>
        <OutArgument x:TypeArguments="ui:GenericValue">[xamlName]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="ui:GenericValue">[errorInfo.ActivityInfo.Name.ToString]</InArgument>
      </Assign.Value>
    </Assign>
    <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="410.4,60" sap2010:WorkflowViewState.IdRef="MessageBox_28" Text="[xamlName]" TopMost="True" />
    <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="410.4,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_20" UnSafe="False" WorkflowFileName="log\logManager.xaml">
      <ui:InvokeWorkflowFile.Arguments>
        <InArgument x:TypeArguments="x:String" x:Key="argsLogData">[ErrTxt]</InArgument>
        <InArgument x:TypeArguments="x:Int32" x:Key="Status">3</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="ProcessName">process</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="SECANSE">[errorInfo.ActivityInfo.Name.ToString]</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="xaml">XAML</InArgument>
        <InArgument x:TypeArguments="x:String" x:Key="ErrTxt">[ErrTxt]</InArgument>
      </ui:InvokeWorkflowFile.Arguments>
    </ui:InvokeWorkflowFile>
    <Assign sap2010:Annotation.AnnotationText="タイムスタンプ" sap:VirtualizedContainerService.HintSize="410.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_13">
      <Assign.To>
        <OutArgument x:TypeArguments="x:String">[CreateDate]</OutArgument>
      </Assign.To>
      <Assign.Value>
        <InArgument x:TypeArguments="x:String">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
      </Assign.Value>
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </Assign>
    <ui:ForEach x:TypeArguments="x:Object" CurrentIndex="{x:Null}" DisplayName="For Each" sap:VirtualizedContainerService.HintSize="410.4,414.4" sap2010:WorkflowViewState.IdRef="ForEach`1_1" Values="[errorInfo.Arguments]">
      <ui:ForEach.Body>
        <ActivityAction x:TypeArguments="x:Object">
          <ActivityAction.Argument>
            <DelegateInArgument x:TypeArguments="x:Object" Name="item" />
          </ActivityAction.Argument>
          <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="375.2,280.8" sap2010:WorkflowViewState.IdRef="Sequence_41">
            <sap:WorkflowViewStateService.ViewState>
              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
              </scg:Dictionary>
            </sap:WorkflowViewStateService.ViewState>
            <Assign sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="Assign_14">
              <Assign.To>
                <OutArgument x:TypeArguments="x:String">[ErrTxt]</OutArgument>
              </Assign.To>
              <Assign.Value>
                <InArgument x:TypeArguments="x:String">[item.ToString]</InArgument>
              </Assign.Value>
            </Assign>
            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_28" UnSafe="False" WorkflowFileName="log\logManager.xaml">
              <ui:InvokeWorkflowFile.Arguments>
                <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="ログ内容">転記開始</InArgument>
                <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">["■エラー発祥時間"+CreateDate+"　エラー詳細"+item.ToString]</InArgument>
              </ui:InvokeWorkflowFile.Arguments>
            </ui:InvokeWorkflowFile>
          </Sequence>
        </ActivityAction>
      </ui:ForEach.Body>
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
          <x:Boolean x:Key="IsPinned">False</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
    </ui:ForEach>
  </Sequence>
</Activity>