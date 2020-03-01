<Activity mc:Ignorable="sap sap2010" x:Class="teamsLog" this:teamsLog.argsLogData="Log" this:teamsLog.登録日="[DateTime.Now.ToString(&quot;yyyy/MM/dd HH:mm:ss&quot;)]" this:teamsLog.ログ内容="Log" this:teamsLog.ログ詳細="Log" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities" xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation" xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib" xmlns:sd="clr-namespace:System.Data;assembly=System.Data" xmlns:this="clr-namespace:" xmlns:ui="http://schemas.uipath.com/workflow/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <x:Members>
    <x:Property Name="argsLogData" Type="InArgument(x:String)" />
    <x:Property Name="登録日" Type="InArgument(x:String)" />
    <x:Property Name="ログ内容" Type="InArgument(x:String)" />
    <x:Property Name="ログ詳細" Type="InArgument(x:String)" />
  </x:Members>
  <mva:VisualBasic.Settings>
    <x:Null />
  </mva:VisualBasic.Settings>
  <sap:VirtualizedContainerService.HintSize>395.2,449.6</sap:VirtualizedContainerService.HintSize>
  <sap2010:WorkflowViewState.IdRef>teamsLog_1</sap2010:WorkflowViewState.IdRef>
  <TextExpression.NamespacesForImplementation>
    <scg:List x:TypeArguments="x:String" Capacity="23">
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
      <x:String>Microsoft.VisualBasic.CompilerServices</x:String>
      <x:String>System.Xml.Serialization</x:String>
    </scg:List>
  </TextExpression.NamespacesForImplementation>
  <TextExpression.ReferencesForImplementation>
    <scg:List x:TypeArguments="AssemblyReference" Capacity="22">
      <AssemblyReference>System.Activities</AssemblyReference>
      <AssemblyReference>Microsoft.VisualBasic</AssemblyReference>
      <AssemblyReference>mscorlib</AssemblyReference>
      <AssemblyReference>System.Data</AssemblyReference>
      <AssemblyReference>System</AssemblyReference>
      <AssemblyReference>System.Drawing</AssemblyReference>
      <AssemblyReference>System.Core</AssemblyReference>
      <AssemblyReference>System.Xml</AssemblyReference>
      <AssemblyReference>System.Xml.Linq</AssemblyReference>
      <AssemblyReference>WindowsBase</AssemblyReference>
      <AssemblyReference>System.Xaml</AssemblyReference>
      <AssemblyReference>PresentationFramework</AssemblyReference>
      <AssemblyReference>PresentationCore</AssemblyReference>
      <AssemblyReference>UiPath.UiAutomation.Activities</AssemblyReference>
      <AssemblyReference>UiPath.System.Activities</AssemblyReference>
      <AssemblyReference>System.ServiceModel</AssemblyReference>
      <AssemblyReference>UiPath.Excel</AssemblyReference>
      <AssemblyReference>UiPath.Mail</AssemblyReference>
      <AssemblyReference>System.ValueTuple</AssemblyReference>
      <AssemblyReference>System.ComponentModel.Composition</AssemblyReference>
      <AssemblyReference>UiPath.Studio.Plugin.Workflow</AssemblyReference>
      <AssemblyReference>System.Data.DataSetExtensions</AssemblyReference>
    </scg:List>
  </TextExpression.ReferencesForImplementation>
  <sap:WorkflowViewStateService.ViewState>
    <scg:Dictionary x:TypeArguments="x:String, x:Object">
      <x:Boolean x:Key="ShouldExpandAll">True</x:Boolean>
    </scg:Dictionary>
  </sap:WorkflowViewStateService.ViewState>
  <Sequence sap:VirtualizedContainerService.HintSize="375.2,389.6" sap2010:WorkflowViewState.IdRef="Sequence_32">
    <Sequence.Variables>
      <Variable x:TypeArguments="ui:GenericValue" Name="prefix" />
      <Variable x:TypeArguments="sd:DataTable" Name="csvLog" />
    </Sequence.Variables>
    <sap:WorkflowViewStateService.ViewState>
      <scg:Dictionary x:TypeArguments="x:String, x:Object">
        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
      </scg:Dictionary>
    </sap:WorkflowViewStateService.ViewState>
    <ui:BuildDataTable DataTable="[csvLog]" DisplayName="Build Data Table" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="BuildDataTable_1" TableInfo="&lt;NewDataSet&gt;&#xD;&#xA;  &lt;xs:schema id=&quot;NewDataSet&quot; xmlns=&quot;&quot; xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot; xmlns:msdata=&quot;urn:schemas-microsoft-com:xml-msdata&quot;&gt;&#xD;&#xA;    &lt;xs:element name=&quot;NewDataSet&quot; msdata:IsDataSet=&quot;true&quot; msdata:MainDataTable=&quot;TableName&quot; msdata:UseCurrentLocale=&quot;true&quot;&gt;&#xD;&#xA;      &lt;xs:complexType&gt;&#xD;&#xA;        &lt;xs:choice minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;&#xD;&#xA;          &lt;xs:element name=&quot;TableName&quot;&gt;&#xD;&#xA;            &lt;xs:complexType&gt;&#xD;&#xA;              &lt;xs:sequence&gt;&#xD;&#xA;                &lt;xs:element name=&quot;登録日&quot; minOccurs=&quot;0&quot;&gt;&#xD;&#xA;                  &lt;xs:simpleType&gt;&#xD;&#xA;                    &lt;xs:restriction base=&quot;xs:string&quot;&gt;&#xD;&#xA;                      &lt;xs:maxLength value=&quot;100&quot; /&gt;&#xD;&#xA;                    &lt;/xs:restriction&gt;&#xD;&#xA;                  &lt;/xs:simpleType&gt;&#xD;&#xA;                &lt;/xs:element&gt;&#xD;&#xA;                &lt;xs:element name=&quot;ログ内容&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot; /&gt;&#xD;&#xA;                &lt;xs:element name=&quot;詳細&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot; /&gt;&#xD;&#xA;              &lt;/xs:sequence&gt;&#xD;&#xA;            &lt;/xs:complexType&gt;&#xD;&#xA;          &lt;/xs:element&gt;&#xD;&#xA;        &lt;/xs:choice&gt;&#xD;&#xA;      &lt;/xs:complexType&gt;&#xD;&#xA;    &lt;/xs:element&gt;&#xD;&#xA;  &lt;/xs:schema&gt;&#xD;&#xA;&lt;/NewDataSet&gt;" />
    <ui:AddDataRow DataRow="{x:Null}" ArrayRow="[{登録日,ログ内容,ログ詳細}]" DataTable="[csvLog]" DisplayName="Add Data Row" sap:VirtualizedContainerService.HintSize="333.6,22.4" sap2010:WorkflowViewState.IdRef="AddDataRow_1" />
    <ui:AppendCsvFile Encoding="{x:Null}" DataTable="[csvLog]" Delimitator="Comma" DisplayName="Append To CSV" FilePath="logfile\Untitled.csv" sap:VirtualizedContainerService.HintSize="333.6,134.4" sap2010:WorkflowViewState.IdRef="AppendCsvFile_1" />
  </Sequence>
</Activity>