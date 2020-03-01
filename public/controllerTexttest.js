<Activity mc:Ignorable="sap sap2010" x:Class="controllerExcellTest" this:controllerExcellTest.転記シートID="12" this:controllerExcellTest.転記シートIID="11" this:controllerExcellTest.テンプレートファイル="Input\Book1.xlsx" this:controllerExcellTest.dic="[New Dictionary(Of String,String)]" this:controllerExcellTest.リスト="[new List(Of String)]" this:controllerExcellTest.作業時間="[DateTime.Now.ToString(&quot;yyyy/MM/dd HH:mm:ss&quot;)]" this:controllerExcellTest.in_判定条件="10" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:av="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities" xmlns:s="clr-namespace:System;assembly=mscorlib" xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation" xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib" xmlns:sd="clr-namespace:System.Data;assembly=System.Data" xmlns:sd1="clr-namespace:System.Diagnostics;assembly=System" xmlns:ss="clr-namespace:System.Security;assembly=mscorlib" xmlns:this="clr-namespace:" xmlns:uga="clr-namespace:UiPath.GSuite.Activities;assembly=UiPath.GSuite.Activities" xmlns:ui="http://schemas.uipath.com/workflow/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <x:Members>
    <x:Property Name="転記シートID" Type="InArgument(x:String)" />
    <x:Property Name="転記シートIID" Type="InArgument(x:String)" />
    <x:Property Name="マップシート位置" Type="InArgument(x:String)" />
    <x:Property Name="変換シート位置" Type="InArgument(x:String)" />
    <x:Property Name="入力シート位置" Type="InArgument(x:String)" />
    <x:Property Name="出力シート位置" Type="InArgument(x:String)" />
    <x:Property Name="入力シート" Type="InArgument(x:String)" />
    <x:Property Name="出力シート" Type="InArgument(x:String)" />
    <x:Property Name="マップシート" Type="InArgument(x:String)" />
    <x:Property Name="出力ファイル" Type="InArgument(x:String)" />
    <x:Property Name="マップファイル" Type="InArgument(x:String)" />
    <x:Property Name="変換シート" Type="InArgument(x:String)" />
    <x:Property Name="変換ファイル" Type="InArgument(x:String)" />
    <x:Property Name="テンプレートファイル" Type="InArgument(x:String)" />
    <x:Property Name="テンプレートシート" Type="InArgument(x:String)" />
    <x:Property Name="dic" Type="InArgument(scg:Dictionary(x:String, x:String))" />
    <x:Property Name="リスト" Type="InArgument(scg:List(x:String))" />
    <x:Property Name="作業時間" Type="InArgument(x:String)" />
    <x:Property Name="転記ファイル名" Type="InArgument(x:String)" />
    <x:Property Name="in_入力ファイル" Type="InArgument(x:String)" />
    <x:Property Name="in_判定条件" Type="InArgument(x:Int32)" />
  </x:Members>
  <mva:VisualBasic.Settings>
    <x:Null />
  </mva:VisualBasic.Settings>
  <sap:VirtualizedContainerService.HintSize>1397.6,1996</sap:VirtualizedContainerService.HintSize>
  <sap2010:WorkflowViewState.IdRef>core転地_1</sap2010:WorkflowViewState.IdRef>
  <TextExpression.NamespacesForImplementation>
    <scg:List x:TypeArguments="x:String" Capacity="28">
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
      <x:String>System.Xml.Serialization</x:String>
      <x:String>Microsoft.Office.Interop.Excel</x:String>
      <x:String>System.Collections.ObjectModel</x:String>
      <x:String>System.Management.Automation</x:String>
      <x:String>System.Security</x:String>
      <x:String>Microsoft.VisualBasic.CompilerServices</x:String>
    </scg:List>
  </TextExpression.NamespacesForImplementation>
  <TextExpression.ReferencesForImplementation>
    <scg:List x:TypeArguments="AssemblyReference" Capacity="26">
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
      <AssemblyReference>System.Management.Automation</AssemblyReference>
      <AssemblyReference>UiPath.Java.Activities</AssemblyReference>
      <AssemblyReference>UiPath.Mail</AssemblyReference>
      <AssemblyReference>UiPath.Python</AssemblyReference>
      <AssemblyReference>System.ServiceModel</AssemblyReference>
      <AssemblyReference>System.ValueTuple</AssemblyReference>
      <AssemblyReference>System.ComponentModel.Composition</AssemblyReference>
      <AssemblyReference>System.Runtime.WindowsRuntime</AssemblyReference>
    </scg:List>
  </TextExpression.ReferencesForImplementation>
  <sap:WorkflowViewStateService.ViewState>
    <scg:Dictionary x:TypeArguments="x:String, x:Object">
      <x:Boolean x:Key="ShouldExpandAll">False</x:Boolean>
      <x:Boolean x:Key="ShouldCollapseAll">False</x:Boolean>
    </scg:Dictionary>
  </sap:WorkflowViewStateService.ViewState>
  <Sequence DisplayName="全体処理 Sequence" sap:VirtualizedContainerService.HintSize="1377.6,1936" sap2010:WorkflowViewState.IdRef="Sequence_8">
    <Sequence.Variables>
      <Variable x:TypeArguments="x:String" Name="登録データ" />
      <Variable x:TypeArguments="x:String" Name="ログ内容" />
      <Variable x:TypeArguments="sd:DataTable" Name="コピー先データ" />
      <Variable x:TypeArguments="sd:DataTable" Name="変換テーブル" />
      <Variable x:TypeArguments="ui:GenericValue" Name="判定条件" />
      <Variable x:TypeArguments="ui:GenericValue" Name="明細位置" />
      <Variable x:TypeArguments="x:Int32" Default="0" Name="コピー先のエクセルの行" />
      <Variable x:TypeArguments="scg:List(x:String)" Name="出力する対象の列" />
      <Variable x:TypeArguments="ui:GenericValue" Name="検索したセルの値" />
      <Variable x:TypeArguments="x:Int32" Name="検索したセル列の番号" />
      <Variable x:TypeArguments="x:Int32" Name="登録する先の列の位置" />
      <Variable x:TypeArguments="s:String[]" Name="入力シート複数" />
      <Variable x:TypeArguments="sd:DataTable" Name="コピー先データテーブル" />
      <Variable x:TypeArguments="x:String" Name="主キー" />
      <Variable x:TypeArguments="x:Int32" Name="登録する列の位置" />
      <Variable x:TypeArguments="x:Int32" Name="主キー検索列" />
      <Variable x:TypeArguments="x:Int32" Name="主キー検索登録列" />
    </Sequence.Variables>
    <sap:WorkflowViewStateService.ViewState>
      <scg:Dictionary x:TypeArguments="x:String, x:Object">
        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
        <x:Boolean x:Key="IsPinned">False</x:Boolean>
      </scg:Dictionary>
    </sap:WorkflowViewStateService.ViewState>
    <TryCatch DisplayName="Try Catch" sap:VirtualizedContainerService.HintSize="1336,1843.2" sap2010:WorkflowViewState.IdRef="TryCatch_1">
      <sap:WorkflowViewStateService.ViewState>
        <scg:Dictionary x:TypeArguments="x:String, x:Object">
          <x:Boolean x:Key="IsPinned">False</x:Boolean>
        </scg:Dictionary>
      </sap:WorkflowViewStateService.ViewState>
      <TryCatch.Try>
        <Sequence DisplayName="DATACONVERT" sap:VirtualizedContainerService.HintSize="1299.2,1616" sap2010:WorkflowViewState.IdRef="Sequence_1">
          <Sequence.Variables>
            <Variable x:TypeArguments="sd:DataTable" Name="MAP" />
            <Variable x:TypeArguments="sd:DataTable" sap2010:Annotation.AnnotationText="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" Name="input" />
            <Variable x:TypeArguments="x:Int32" Name="col" />
          </Sequence.Variables>
          <sap:WorkflowViewStateService.ViewState>
            <scg:Dictionary x:TypeArguments="x:String, x:Object">
              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
              <x:Boolean x:Key="IsPinned">False</x:Boolean>
            </scg:Dictionary>
          </sap:WorkflowViewStateService.ViewState>
          <Flowchart sap:VirtualizedContainerService.HintSize="1257.6,1523.2" sap2010:WorkflowViewState.IdRef="Flowchart_1">
            <Flowchart.Variables>
              <Variable x:TypeArguments="x:Boolean" Name="ファイルが在るか判定フラグ" />
              <Variable x:TypeArguments="ss:SecureString" Name="資格情報ユーザー" />
              <Variable x:TypeArguments="sd:DataTable" Name="変換結果" />
              <Variable x:TypeArguments="x:String" Name="pass" />
              <Variable x:TypeArguments="x:String" Name="登録する先のセル値" />
              <Variable x:TypeArguments="x:String" Name="登録する元のセル値" />
              <Variable x:TypeArguments="x:Boolean" Name="ファイル" />
            </Flowchart.Variables>
            <sap:WorkflowViewStateService.ViewState>
              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                <x:Boolean x:Key="IsPinned">False</x:Boolean>
                <av:Point x:Key="ShapeLocation">320,0</av:Point>
                <av:Size x:Key="ShapeSize">60,75.2</av:Size>
                <av:PointCollection x:Key="ConnectorLocation">350,75.2 350,108.8</av:PointCollection>
                <x:Double x:Key="Height">1486</x:Double>
                <x:Double x:Key="Width">1224</x:Double>
              </scg:Dictionary>
            </sap:WorkflowViewStateService.ViewState>
            <Flowchart.StartNode>
              <x:Reference>__ReferenceID11</x:Reference>
            </Flowchart.StartNode>
            <FlowStep x:Name="__ReferenceID3">
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <av:Point x:Key="ShapeLocation">250,294.8</av:Point>
                  <av:Size x:Key="ShapeSize">200,200.8</av:Size>
                  <av:PointCollection x:Key="ConnectorLocation">350,495.6 350,524</av:PointCollection>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
              <Sequence sap2010:Annotation.AnnotationText="下記を初期化する&#xA;&#xA;登録データ&#xD;&#xA;複数の入力シート&#xA;出力データ&#xA;マップデータ&#xA;文字変換データ&#xD;&#xA;登録時間" DisplayName="初期化処理 Sequence" sap:VirtualizedContainerService.HintSize="200,200.8" sap2010:WorkflowViewState.IdRef="Sequence_43">
                <sap:WorkflowViewStateService.ViewState>
                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                    <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                  </scg:Dictionary>
                </sap:WorkflowViewStateService.ViewState>
                <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="558.4,52" sap2010:WorkflowViewState.IdRef="CommentOut_49">
                  <ui:CommentOut.Body>
                    <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="305.6,152.8" sap2010:WorkflowViewState.IdRef="Sequence_150">
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                      <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_13">
                        <Assign.To>
                          <OutArgument x:TypeArguments="scg:Dictionary(x:String, x:String)">[dic]</OutArgument>
                        </Assign.To>
                        <Assign.Value>
                          <InArgument x:TypeArguments="scg:Dictionary(x:String, x:String)">[New Dictionary(Of String,String)]</InArgument>
                        </Assign.Value>
                      </Assign>
                    </Sequence>
                  </ui:CommentOut.Body>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </ui:CommentOut>
                <Assign sap2010:Annotation.AnnotationText="フレームワークの設定値から読み込み&#xA;dic(&quot;テンプレートファイル&quot;)&#xA;&#xA;&quot;Input\テンプレート.xlsx&quot;" sap:VirtualizedContainerService.HintSize="558.4,132.8" sap2010:WorkflowViewState.IdRef="Assign_72">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[テンプレートファイル]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("テンプレートファイル")]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <Assign sap2010:Annotation.AnnotationText="パラメーターファイルによって動作の切り替え&#xA;パラメーター１　明細から迷彩&#xA;パラメーター２　単票から明細&#xA;パラメーター３　明細から単票" sap:VirtualizedContainerService.HintSize="558.4,132.8" sap2010:WorkflowViewState.IdRef="Assign_109">
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
                <Switch x:TypeArguments="x:Int32" sap2010:Annotation.AnnotationText="実行条件によってシートの切り替え&#xD;&#xA;デフォルト　明細から明細&#xD;&#xA;１　単票から明細&#xD;&#xA;３　明細から単票" DisplayName="Switch" Expression="[in_判定条件]" sap:VirtualizedContainerService.HintSize="558.4,233.6" sap2010:WorkflowViewState.IdRef="Switch`1_1">
                  <Switch.Default>
                    <Assign sap2010:Annotation.AnnotationText="パラメーターファイルによって動作の切り替え&#xA;パラメーター１　明細から迷彩&#xA;パラメーター２　単票から明細&#xA;パラメーター３　明細から単票" sap:VirtualizedContainerService.HintSize="264,132.8" sap2010:WorkflowViewState.IdRef="Assign_145">
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
                  </Switch.Default>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                  <Assign x:Key="3" sap2010:Annotation.AnnotationText="パラメーターファイルによって動作の切り替え&#xA;パラメーター１　明細から迷彩&#xA;パラメーター２　単票から明細&#xA;パラメーター３　明細から単票" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_143">
                    <Assign.To>
                      <OutArgument x:TypeArguments="x:String">[テンプレートシート]</OutArgument>
                    </Assign.To>
                    <Assign.Value>
                      <InArgument x:TypeArguments="x:String">パラメーター３</InArgument>
                    </Assign.Value>
                    <sap:WorkflowViewStateService.ViewState>
                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                      </scg:Dictionary>
                    </sap:WorkflowViewStateService.ViewState>
                  </Assign>
                  <Assign x:Key="1" sap2010:Annotation.AnnotationText="パラメーターファイルによって動作の切り替え&#xA;パラメーター１　明細から迷彩&#xA;パラメーター２　単票から明細&#xA;パラメーター３　明細から単票" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_144">
                    <Assign.To>
                      <OutArgument x:TypeArguments="x:String">[テンプレートシート]</OutArgument>
                    </Assign.To>
                    <Assign.Value>
                      <InArgument x:TypeArguments="x:String">パラメーター1</InArgument>
                    </Assign.Value>
                    <sap:WorkflowViewStateService.ViewState>
                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                      </scg:Dictionary>
                    </sap:WorkflowViewStateService.ViewState>
                  </Assign>
                </Switch>
                <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="MAPの値を読んでデータテーブルに展開する&#xA;読み込む　場所の設定をする&#xA;余計な項目がある為&#xA;入力　&quot;C:\Users\USER\Documents\Book1.xlsx&quot;&#xA;出力　MAP {DataTable}&#xA;&#xA;ディクショナリーから読み込む" DisplayName="テンプレート初期化 DictionNaryの値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="558.4,795.2" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_11" Visible="False" WorkbookPath="[テンプレートファイル]">
                  <ui:ExcelApplicationScope.Body>
                    <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                      <ActivityAction.Argument>
                        <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                      </ActivityAction.Argument>
                      <Sequence DisplayName="データテーブルへの読み込み（Do）" sap:VirtualizedContainerService.HintSize="396.8,567.2" sap2010:WorkflowViewState.IdRef="Sequence_46">
                        <Sequence.Variables>
                          <Variable x:TypeArguments="sd:DataTable" Name="pDictionary" />
                          <Variable x:TypeArguments="sd:DataTable" Name="マッピングデータ" />
                        </Sequence.Variables>
                        <sap:WorkflowViewStateService.ViewState>
                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                          </scg:Dictionary>
                        </sap:WorkflowViewStateService.ViewState>
                        <ui:ExcelReadRange AddHeaders="True" sap2010:Annotation.AnnotationText="固定値&#xA;Output　DtParam" DataTable="[マッピングデータ]" DisplayName="マップデータの読み込み(Read Range)" sap:VirtualizedContainerService.HintSize="355.2,102.4" sap2010:WorkflowViewState.IdRef="ExcelReadRange_9" Range="A1" SheetName="[テンプレートシート]">
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                        </ui:ExcelReadRange>
                        <ui:ForEachRow CurrentIndex="{x:Null}" DataTable="[マッピングデータ]" DisplayName="For Each Row" sap:VirtualizedContainerService.HintSize="355.2,332" sap2010:WorkflowViewState.IdRef="ForEachRow_3">
                          <ui:ForEachRow.Body>
                            <ActivityAction x:TypeArguments="sd:DataRow">
                              <ActivityAction.Argument>
                                <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                              </ActivityAction.Argument>
                              <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_45">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                                <Assign sap2010:Annotation.AnnotationText="ディクショナリーに追加" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_12">
                                  <Assign.To>
                                    <OutArgument x:TypeArguments="x:String">[dic(row(0).ToString)]</OutArgument>
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
                <Assign DisplayName="入力シート Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_38">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[入力シート]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("入力シート")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign sap2010:Annotation.AnnotationText="単票から明細登録時に複数処理をする" DisplayName="入力シート Assign" sap:VirtualizedContainerService.HintSize="558.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_137">
                  <Assign.To>
                    <OutArgument x:TypeArguments="s:String[]">[入力シート複数]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="s:String[]">[dic("入力シート複数").Split(","c)]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <ui:Comment sap:VirtualizedContainerService.HintSize="558.4,56" sap2010:WorkflowViewState.IdRef="Comment_1" Text="//メインから処理をする場合" />
                <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="558.4,231.2" sap2010:WorkflowViewState.IdRef="CommentOut_75">
                  <ui:CommentOut.Body>
                    <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="305.6,152.8" sap2010:WorkflowViewState.IdRef="Sequence_201">
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                      <Assign DisplayName="入力ファイル Assign" sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_66">
                        <Assign.To>
                          <OutArgument x:TypeArguments="x:String">[in_入力ファイル]</OutArgument>
                        </Assign.To>
                        <Assign.Value>
                          <InArgument x:TypeArguments="x:String">[dic("InPut")+dic("入力ファイル名")]</InArgument>
                        </Assign.Value>
                      </Assign>
                    </Sequence>
                  </ui:CommentOut.Body>
                </ui:CommentOut>
                <ui:Comment sap:VirtualizedContainerService.HintSize="558.4,56" sap2010:WorkflowViewState.IdRef="Comment_3" Text="// メインから処理をする場合&#xD;&#xA;" />
                <Assign sap2010:Annotation.AnnotationText="dic(&quot;InPut&quot;)+入力ファイル&#xD;&#xA;Mainシステムからファイル名で実行" DisplayName="入力ファイル Assign" sap:VirtualizedContainerService.HintSize="558.4,102.4" sap2010:WorkflowViewState.IdRef="Assign_142">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[in_入力ファイル]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("Inputファイルパス")+in_入力ファイル]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <Assign DisplayName="入力シート位置 Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_44">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[入力シート位置]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("入力シート位置")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="出力シート Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_138">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[出力シート]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("出力シート")]</InArgument>
                  </Assign.Value>
                </Assign>
                <ui:Comment sap:VirtualizedContainerService.HintSize="558.4,56" sap2010:WorkflowViewState.IdRef="Comment_4" Text="// メインから処理をする場合&#xD;&#xA;" />
                <Assign sap2010:Annotation.AnnotationText="dic(&quot;Output&quot;)+dic(&quot;出力ファイル名&quot;)" DisplayName="出力ファイル Assign" sap:VirtualizedContainerService.HintSize="558.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_67">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[出力ファイル]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("Output")+dic("出力ファイル名")]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <Assign DisplayName="出力シート位置 Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_43">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[出力シート位置]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("出力シート位置")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="マップシート Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_40">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[マップシート]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("マップシート")]</InArgument>
                  </Assign.Value>
                </Assign>
                <ui:Comment sap:VirtualizedContainerService.HintSize="558.4,56" sap2010:WorkflowViewState.IdRef="Comment_5" Text="// Write your comments in the Text property" />
                <Assign DisplayName="マップファイル Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_68">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[マップファイル]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[テンプレートファイル]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="マップシート位置 Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_41">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[マップシート位置]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("マップシート位置")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="変換シート位置 Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_42">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[変換シート位置]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("変換シート位置")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="変換シート Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_73">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[変換シート]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[dic("変換シート")]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign DisplayName="変換ファイル Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_74">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:String">[変換ファイル]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:String">[テンプレートファイル]</InArgument>
                  </Assign.Value>
                </Assign>
                <Assign sap2010:Annotation.AnnotationText="入力値から出力　エクセルに記載がいい" DisplayName="明細位置 処理する転記データの行番号 Assign" sap:VirtualizedContainerService.HintSize="558.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_10">
                  <Assign.To>
                    <OutArgument x:TypeArguments="ui:GenericValue">[明細位置]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="ui:GenericValue">[dic("明細位置")]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <Assign sap2010:Annotation.AnnotationText="登録前にルックアップで対応列の検索&#xD;&#xA;&#xD;&#xA;入力値から出力　エクセルに記載がいい" DisplayName="登録先の検索キー列 Assign" sap:VirtualizedContainerService.HintSize="558.4,117.6" sap2010:WorkflowViewState.IdRef="Assign_147">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:Int32">[主キー検索列]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:Int32">[Cint(dic("主キー検索列"))]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <Assign sap2010:Annotation.AnnotationText="入力値から出力　エクセルに記載がいい" DisplayName="登録元の検索キー列 Assign" sap:VirtualizedContainerService.HintSize="558.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_148">
                  <Assign.To>
                    <OutArgument x:TypeArguments="x:Int32">[主キー検索登録列]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="x:Int32">[Cint(dic("主キー検索登録列"))]</InArgument>
                  </Assign.Value>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </Assign>
                <ui:CommentOut sap2010:Annotation.AnnotationText="初期設定から取得する場合" DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="558.4,262.4" sap2010:WorkflowViewState.IdRef="CommentOut_77">
                  <ui:CommentOut.Body>
                    <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="305.6,152.8" sap2010:WorkflowViewState.IdRef="Sequence_203">
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                      <Assign DisplayName="判定条件 CRUDの設定 Assign" sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_11">
                        <Assign.To>
                          <OutArgument x:TypeArguments="ui:GenericValue">[判定条件]</OutArgument>
                        </Assign.To>
                        <Assign.Value>
                          <InArgument x:TypeArguments="ui:GenericValue">[dic("判定条件")]</InArgument>
                        </Assign.Value>
                      </Assign>
                    </Sequence>
                  </ui:CommentOut.Body>
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                </ui:CommentOut>
                <Assign DisplayName="判定条件 CRUDの設定 Assign" sap:VirtualizedContainerService.HintSize="558.4,60" sap2010:WorkflowViewState.IdRef="Assign_146">
                  <Assign.To>
                    <OutArgument x:TypeArguments="ui:GenericValue">[判定条件]</OutArgument>
                  </Assign.To>
                  <Assign.Value>
                    <InArgument x:TypeArguments="ui:GenericValue">[in_判定条件]</InArgument>
                  </Assign.Value>
                </Assign>
                <WriteLine DisplayName="Write Line" sap:VirtualizedContainerService.HintSize="558.4,61.6" sap2010:WorkflowViewState.IdRef="WriteLine_1" Text="[判定条件]" />
                <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="558.4,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_19" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                  <ui:InvokeWorkflowFile.Arguments>
                    <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                    <InArgument x:TypeArguments="x:String" x:Key="ログ内容">転記開始</InArgument>
                    <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">["登録する処理は"+判定条件]</InArgument>
                  </ui:InvokeWorkflowFile.Arguments>
                </ui:InvokeWorkflowFile>
                <ui:Comment sap:VirtualizedContainerService.HintSize="558.4,56" sap2010:WorkflowViewState.IdRef="Comment_6" Text="// 呼び出し物の値で設定" />
                <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="単票の値を読んでデータテーブルに展開する&#xA;読み込む　場所の設定をする&#xA;余計な項目がある為&#xA;入力　&quot;C:\Users\USER\Documents\Book1.xlsx&quot;&#xA;出力　MAP {DataTable}" DisplayName="入力の値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="558.4,809.6" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_9" Visible="False" WorkbookPath="[in_入力ファイル]">
                  <ui:ExcelApplicationScope.Body>
                    <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                      <ActivityAction.Argument>
                        <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                      </ActivityAction.Argument>
                      <Sequence sap:VirtualizedContainerService.HintSize="524.8,612" sap2010:WorkflowViewState.IdRef="Sequence_106">
                        <Sequence.Variables>
                          <Variable x:TypeArguments="sd:DataTable" Name="filterDT" />
                        </Sequence.Variables>
                        <sap:WorkflowViewStateService.ViewState>
                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                          </scg:Dictionary>
                        </sap:WorkflowViewStateService.ViewState>
                        <ui:ExcelReadRange AddHeaders="False" sap2010:Annotation.AnnotationText="入力の値を読み取る&#xA;IN Sheet4&#xA;OUT　変換先" DataTable="[input]" DisplayName="Read Range" sap:VirtualizedContainerService.HintSize="483.2,117.6" sap2010:WorkflowViewState.IdRef="ExcelReadRange_10" PreserveFormat="True" Range="[入力シート位置]" SheetName="[入力シート]">
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                        </ui:ExcelReadRange>
                        <ui:Comment sap:VirtualizedContainerService.HintSize="483.2,56" sap2010:WorkflowViewState.IdRef="Comment_2" Text="// 明細から単票へ登録する場合" />
                        <If sap2010:Annotation.AnnotationText="明細から単票へ転記の際はＩＤを元に転記をするので明細ＩＤでフィルターをかける&#xD;&#xA;&#xD;&#xA;キーは指定キーを設定に変更する＊" Condition="[Cint(判定条件) &lt;&gt; 3]" DisplayName="IDがある場合はフィルターを設定をする If" sap:VirtualizedContainerService.HintSize="483.2,265.6" sap2010:WorkflowViewState.IdRef="If_7">
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                          <If.Else>
                            <ui:FilterDataTable DataTable="[input]" DisplayName="Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="FilterDataTable_5" OutputDataTable="[input]" SelectColumnsMode="Keep">
                              <ui:FilterDataTable.Filters>
                                <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                  <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                    <ui:FilterOperationArgument.Column>
                                      <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                    </ui:FilterOperationArgument.Column>
                                    <ui:FilterOperationArgument.Operand>
                                      <InArgument x:TypeArguments="x:String">[転記シートIID.ToString]</InArgument>
                                    </ui:FilterOperationArgument.Operand>
                                  </ui:FilterOperationArgument>
                                </scg:List>
                              </ui:FilterDataTable.Filters>
                              <ui:FilterDataTable.SelectColumns>
                                <scg:List x:TypeArguments="InArgument" Capacity="4">
                                  <x:Null />
                                </scg:List>
                              </ui:FilterDataTable.SelectColumns>
                            </ui:FilterDataTable>
                          </If.Else>
                        </If>
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
                <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="" DisplayName="出力の値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="558.4,293.6" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_8" Visible="False" WorkbookPath="[出力ファイル]">
                  <ui:ExcelApplicationScope.Body>
                    <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                      <ActivityAction.Argument>
                        <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                      </ActivityAction.Argument>
                      <Sequence DisplayName="データテーブルへの読み込み（Do）" sap:VirtualizedContainerService.HintSize="375.2,152.8" sap2010:WorkflowViewState.IdRef="Sequence_31">
                        <sap:WorkflowViewStateService.ViewState>
                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                          </scg:Dictionary>
                        </sap:WorkflowViewStateService.ViewState>
                        <ui:ExcelReadRange AddHeaders="False" DataTable="[コピー先データ]" DisplayName="出力データの読み込み(Read Range)" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="ExcelReadRange_5" PreserveFormat="True" Range="[出力シート位置]" SheetName="[出力シート]" />
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
                <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="MAPの値を読んでデータテーブルに展開する&#xA;読み込む　場所の設定をする&#xA;余計な項目がある為&#xA;入力　&quot;C:\Users\USER\Documents\Book1.xlsx&quot;&#xA;　　　　dic(&quot;InPut&quot;)&#xA;出力　MAP {DataTable}" DisplayName="MAPの値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="558.4,741.6" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_10" Visible="False" WorkbookPath="[テンプレートファイル]">
                  <ui:ExcelApplicationScope.Body>
                    <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                      <ActivityAction.Argument>
                        <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                      </ActivityAction.Argument>
                      <Sequence DisplayName="データテーブルへの読み込み（Do）" sap:VirtualizedContainerService.HintSize="375.2,528.8" sap2010:WorkflowViewState.IdRef="Sequence_40">
                        <Sequence.Variables>
                          <Variable x:TypeArguments="sd:DataTable" Name="dt主キー" />
                        </Sequence.Variables>
                        <sap:WorkflowViewStateService.ViewState>
                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                          </scg:Dictionary>
                        </sap:WorkflowViewStateService.ViewState>
                        <ui:ExcelReadRange AddHeaders="True" DataTable="[MAP]" DisplayName="マップデータの読み込み(Read Range)" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="ExcelReadRange_8" Range="[マップシート位置]" SheetName="[マップシート]" />
                        <ui:FilterDataTable sap2010:Annotation.AnnotationText="主キーの設定&#xD;&#xA;ＭＡＰシートで主キーに設定されているデータを取得&#xD;&#xA;設定されている　行　列の値からデータを取得する&#xD;&#xA;&#xD;&#xA;Output" DataTable="[MAP]" DisplayName="主キー取得 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="333.6,148" sap2010:WorkflowViewState.IdRef="FilterDataTable_10" OutputDataTable="[dt主キー]" SelectColumnsMode="Keep">
                          <ui:FilterDataTable.Filters>
                            <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                              <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                <ui:FilterOperationArgument.Column>
                                  <InArgument x:TypeArguments="x:String">["主キー"]</InArgument>
                                </ui:FilterOperationArgument.Column>
                                <ui:FilterOperationArgument.Operand>
                                  <InArgument x:TypeArguments="x:Int32">[1]</InArgument>
                                </ui:FilterOperationArgument.Operand>
                              </ui:FilterOperationArgument>
                            </scg:List>
                          </ui:FilterDataTable.Filters>
                          <ui:FilterDataTable.SelectColumns>
                            <scg:List x:TypeArguments="InArgument" Capacity="4">
                              <x:Null />
                            </scg:List>
                          </ui:FilterDataTable.SelectColumns>
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                        </ui:FilterDataTable>
                        <Assign sap2010:Annotation.AnnotationText="主キーの設定　帳票ＩＤ&#xD;&#xA;明細など主キーを元に検索&#xD;&#xA;帳票の　キー番号&#xD;&#xA;&#xD;&#xA;設定値ー１でデータテーブルの値を取得する" sap:VirtualizedContainerService.HintSize="333.6,148" sap2010:WorkflowViewState.IdRef="Assign_132">
                          <Assign.To>
                            <OutArgument x:TypeArguments="x:String">[主キー]</OutArgument>
                          </Assign.To>
                          <Assign.Value>
                            <InArgument x:TypeArguments="x:String">[input(Cint(dt主キー(0)(2))-1)(Cint(dt主キー(0)(2))-1).ToString]</InArgument>
                          </Assign.Value>
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                        </Assign>
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
                <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="物理名　論理名が異なる場合の変換用のデータ取得&#xA;&#xA;取得したデータに変換文字列がある場合にの変換用テーブル&#xA;IN　&quot;C:\Users\USER\Documents\Book1.xlsx&quot;&#xA;framwork pDictionary から　インプットシートを取得" DisplayName="文字列変換用データ取得 Excel Application Scope" sap:VirtualizedContainerService.HintSize="558.4,408" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_7" Visible="False" WorkbookPath="[テンプレートファイル]">
                  <ui:ExcelApplicationScope.Body>
                    <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                      <ActivityAction.Argument>
                        <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                      </ActivityAction.Argument>
                      <Sequence DisplayName="Do" sap:VirtualizedContainerService.HintSize="375.2,210.4" sap2010:WorkflowViewState.IdRef="Sequence_28">
                        <sap:WorkflowViewStateService.ViewState>
                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                          </scg:Dictionary>
                        </sap:WorkflowViewStateService.ViewState>
                        <ui:ExcelReadRange AddHeaders="False" sap2010:Annotation.AnnotationText="入力の値を読み取る&#xA;IN Sheet4&#xA;OUT　変換先" DataTable="[変換テーブル]" DisplayName="Read Range" sap:VirtualizedContainerService.HintSize="333.6,117.6" sap2010:WorkflowViewState.IdRef="ExcelReadRange_4" Range="[変換シート位置]" SheetName="[変換シート]">
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                        </ui:ExcelReadRange>
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
              </Sequence>
              <FlowStep.Next>
                <FlowStep x:Name="__ReferenceID6">
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <av:Point x:Key="ShapeLocation">250,524</av:Point>
                      <av:Size x:Key="ShapeSize">200,94.4</av:Size>
                      <av:PointCollection x:Key="ConnectorLocation">350,618.4 350,636.4</av:PointCollection>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                  <ui:PathExists sap2010:Annotation.AnnotationText="ファイルが在るか確認をして無ければ処理をしない" DisplayName="ファイル処理の確認 Path Exists" Exists="[ファイルが在るか判定フラグ]" sap:VirtualizedContainerService.HintSize="200,94.4" sap2010:WorkflowViewState.IdRef="PathExists_1" Path="[in_入力ファイル]" PathType="File">
                    <sap:WorkflowViewStateService.ViewState>
                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                      </scg:Dictionary>
                    </sap:WorkflowViewStateService.ViewState>
                  </ui:PathExists>
                  <FlowStep.Next>
                    <FlowDecision x:Name="__ReferenceID1" Condition="[ファイルが在るか判定フラグ]" DisplayName="入力ファイルがあるか確認 Flow Decision" sap:VirtualizedContainerService.HintSize="160,87.2" sap2010:WorkflowViewState.IdRef="FlowDecision_1">
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                          <av:Point x:Key="ShapeLocation">270,636.4</av:Point>
                          <av:Size x:Key="ShapeSize">160,87.2</av:Size>
                          <av:PointCollection x:Key="TrueConnector">270,680 251.4,680 251.4,786.4 341.4,786.4 341.4,816.4</av:PointCollection>
                          <av:PointCollection x:Key="FalseConnector">430,680 700,680 700,726.4</av:PointCollection>
                          <x:String x:Key="TrueLabel">在る場合</x:String>
                          <x:String x:Key="FalseLabel">無い場合</x:String>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                      <FlowDecision.True>
                        <FlowSwitch x:TypeArguments="x:Int32" x:Name="__ReferenceID2" DisplayName="Flow Switch" Expression="[判定条件]" sap:VirtualizedContainerService.HintSize="76,87.2" sap2010:WorkflowViewState.IdRef="FlowSwitch`1_3">
                          <FlowSwitch.Default>
                            <FlowStep x:Name="__ReferenceID4">
                              <sap:WorkflowViewStateService.ViewState>
                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                  <av:Point x:Key="ShapeLocation">0,1016.4</av:Point>
                                  <av:Size x:Key="ShapeSize">200,155.2</av:Size>
                                  <av:PointCollection x:Key="ConnectorLocation">100,1171.6 100,1345.6 260,1345.6</av:PointCollection>
                                </scg:Dictionary>
                              </sap:WorkflowViewStateService.ViewState>
                              <Sequence sap2010:Annotation.AnnotationText="明細から明細へ登録&#xA;入力タイプ 10&#xA;ＩＤがある場合は更新&#xA;ＩＤがない場合は登録&#xA;" DisplayName="T001_データの転記 マップ１ Sequence" sap:VirtualizedContainerService.HintSize="200,155.2" sap2010:WorkflowViewState.IdRef="Sequence_90">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                                <TryCatch DisplayName="Try Catch" sap:VirtualizedContainerService.HintSize="1528.8,5055.2" sap2010:WorkflowViewState.IdRef="TryCatch_2">
                                  <sap:WorkflowViewStateService.ViewState>
                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                    </scg:Dictionary>
                                  </sap:WorkflowViewStateService.ViewState>
                                  <TryCatch.Try>
                                    <Sequence DisplayName="シートに転記をして追加 Sequence" sap:VirtualizedContainerService.HintSize="1492,4828" sap2010:WorkflowViewState.IdRef="Sequence_89">
                                      <Sequence.Variables>
                                        <Variable x:TypeArguments="ui:GenericValue" Name="dt" />
                                        <Variable x:TypeArguments="sd:DataRow" Name="dtRow" />
                                        <Variable x:TypeArguments="ui:GenericValue" Name="登録登録元" />
                                        <Variable x:TypeArguments="sd:DataTable" Name="登録元エクセル" />
                                        <Variable x:TypeArguments="sd:DataTable" Name="登録先エクセル" />
                                        <Variable x:TypeArguments="sd:DataTable" Name="マッピングファイル" />
                                        <Variable x:TypeArguments="x:Int32" Name="登録モード" />
                                        <Variable x:TypeArguments="x:String" Name="出力ファイル名" />
                                        <Variable x:TypeArguments="x:String" Name="出力先シート" />
                                        <Variable x:TypeArguments="s:String[]" Name="出力する対象の列2番目" />
                                      </Sequence.Variables>
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <Assign sap2010:Annotation.AnnotationText="input値をコピーして処理" sap:VirtualizedContainerService.HintSize="1450.4,91.2" sap2010:WorkflowViewState.IdRef="Assign_45">
                                        <Assign.To>
                                          <OutArgument x:TypeArguments="sd:DataTable">[コピー先データテーブル]</OutArgument>
                                        </Assign.To>
                                        <Assign.Value>
                                          <InArgument x:TypeArguments="sd:DataTable">[コピー先データ]</InArgument>
                                        </Assign.Value>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                      </Assign>
                                      <Assign sap:VirtualizedContainerService.HintSize="1450.4,60" sap2010:WorkflowViewState.IdRef="Assign_46">
                                        <Assign.To>
                                          <OutArgument x:TypeArguments="sd:DataTable">[登録先エクセル]</OutArgument>
                                        </Assign.To>
                                        <Assign.Value>
                                          <InArgument x:TypeArguments="sd:DataTable">[コピー先データ]</InArgument>
                                        </Assign.Value>
                                      </Assign>
                                      <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="コピー元のデータを一行ずつ処理をする&#xD;&#xA;登録は全て追加処理" DataTable="[input]" DisplayName="データの転記 For Each Row" sap:VirtualizedContainerService.HintSize="1450.4,2695.2" sap2010:WorkflowViewState.IdRef="ForEachRow_6">
                                        <ui:ForEachRow.Body>
                                          <ActivityAction x:TypeArguments="sd:DataRow">
                                            <ActivityAction.Argument>
                                              <DelegateInArgument x:TypeArguments="sd:DataRow" Name="rows" />
                                            </ActivityAction.Argument>
                                            <Sequence DisplayName="登録　更新処理 Sequence" sap:VirtualizedContainerService.HintSize="1400.8,2504.8" sap2010:WorkflowViewState.IdRef="Sequence_84">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:LookupDataTable LookupColumnName="{x:Null}" LookupDataColumn="{x:Null}" TargetColumnName="{x:Null}" TargetDataColumn="{x:Null}" sap2010:Annotation.AnnotationText="登録行でキーがあるか検索をする&#xD;&#xA;rows(0).ToString&#xD;&#xA;&#xD;&#xA;主キー検索登録列で&#xD;&#xA;主キー検索列を検索する&#xD;&#xA;" DataTable="[コピー先データテーブル]" DisplayName="出力先のID検索 Lookup Data Table" sap:VirtualizedContainerService.HintSize="1359.2,125.6" sap2010:WorkflowViewState.IdRef="LookupDataTable_1" LookupColumnIndex="[主キー検索列]" LookupValue="[rows(主キー検索登録列).ToString]" RowIndex="[検索したセル列の番号]" TargetColumnIndex="[主キー検索登録列]">
                                                <ui:LookupDataTable.CellValue>
                                                  <OutArgument x:TypeArguments="ui:GenericValue">[検索したセルの値]</OutArgument>
                                                </ui:LookupDataTable.CellValue>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:LookupDataTable>
                                              <Sequence DisplayName="転記先にに転記データの追加 Sequence" sap:VirtualizedContainerService.HintSize="1359.2,2246.4" sap2010:WorkflowViewState.IdRef="Sequence_83">
                                                <Sequence.Variables>
                                                  <Variable x:TypeArguments="x:Int32" Name="flag" />
                                                  <Variable x:TypeArguments="ui:GenericValue" Name="cellVal" />
                                                </Sequence.Variables>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                                <If sap2010:Annotation.AnnotationText="既にIDがある場合は　更新処理　（今回は追加をしてログをかき出す）&#xD;&#xA;キーとなるデータは　lookUpで検索をする&#xA;無い場合はー１が返ってくるのでログを出力する&#xD;&#xA;&#xD;&#xA;更新処理の場合はElseのコメントアウトを除外する" Condition="[検索したセル列の番号.ToString = &quot;-1&quot;]" sap:VirtualizedContainerService.HintSize="1317.6,2153.6" sap2010:WorkflowViewState.IdRef="If_3">
                                                  <sap:WorkflowViewStateService.ViewState>
                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                    </scg:Dictionary>
                                                  </sap:WorkflowViewStateService.ViewState>
                                                  <If.Then>
                                                    <Sequence DisplayName="新規登録 Sequence" sap:VirtualizedContainerService.HintSize="616,1917.6" sap2010:WorkflowViewState.IdRef="Sequence_81">
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <ui:AddDataRow DataRow="{x:Null}" sap2010:Annotation.AnnotationText="追加用データの登録" ArrayRow="[{}]" DataTable="[コピー先データテーブル]" DisplayName="Add Data Row" sap:VirtualizedContainerService.HintSize="574.4,53.6" sap2010:WorkflowViewState.IdRef="AddDataRow_2">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:AddDataRow>
                                                      <Assign sap2010:Annotation.AnnotationText="登録先にあれば更新　検索インデックスが -1 でない場合&#xA;登録先に無ければ追加（新規の物の為）&#xA;最終レコードのカウントを取得" DisplayName="コピー先の位置の確認Assign" sap:VirtualizedContainerService.HintSize="574.4,132.8" sap2010:WorkflowViewState.IdRef="Assign_55">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:Int32">[コピー先のエクセルの行]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:Int32">[コピー先データテーブル.rows.Count]</InArgument>
                                                        </Assign.Value>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </Assign>
                                                      <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="転記データを読み込み　登録元から登録先へ追加" DataTable="[MAP]" DisplayName="転記部分 For Each Row" sap:VirtualizedContainerService.HintSize="574.4,1558.4" sap2010:WorkflowViewState.IdRef="ForEachRow_4">
                                                        <ui:ForEachRow.Body>
                                                          <ActivityAction x:TypeArguments="sd:DataRow">
                                                            <ActivityAction.Argument>
                                                              <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                                                            </ActivityAction.Argument>
                                                            <Sequence DisplayName="マッピングシートの内容でデータの転記 Body" sap:VirtualizedContainerService.HintSize="524.8,1379.2" sap2010:WorkflowViewState.IdRef="Sequence_79">
                                                              <Sequence.Variables>
                                                                <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                              </Sequence.Variables>
                                                              <sap:WorkflowViewStateService.ViewState>
                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                </scg:Dictionary>
                                                              </sap:WorkflowViewStateService.ViewState>
                                                              <Assign sap2010:Annotation.AnnotationText="登録元列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録元セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_56">
                                                                <Assign.To>
                                                                  <OutArgument x:TypeArguments="x:Int32">[登録する元の位置]</OutArgument>
                                                                </Assign.To>
                                                                <Assign.Value>
                                                                  <InArgument x:TypeArguments="x:Int32">[Cint(row(2))]</InArgument>
                                                                </Assign.Value>
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                              </Assign>
                                                              <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_57">
                                                                <Assign.To>
                                                                  <OutArgument x:TypeArguments="x:Int32">[登録する列の位置]</OutArgument>
                                                                </Assign.To>
                                                                <Assign.Value>
                                                                  <InArgument x:TypeArguments="x:Int32">[Cint(row(3))]</InArgument>
                                                                </Assign.Value>
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                              </Assign>
                                                              <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はそのままセルの値を挿入" DisplayName="登録先データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_79">
                                                                <Assign.To>
                                                                  <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                                </Assign.To>
                                                                <Assign.Value>
                                                                  <InArgument x:TypeArguments="x:String">[rows(Cint(登録する元の位置)-1).ToString]</InArgument>
                                                                </Assign.Value>
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                              </Assign>
                                                              <Sequence sap2010:Annotation.AnnotationText="rows(Cint(登録する元の位置)-1)&#xD;&#xA;変換データ　0番目と値がマッチした場合は書き換えを行う&#xD;&#xA;&#xD;&#xA;検索対象をテンプレートの主キーの項目で行う" DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="483.2,185.6" sap2010:WorkflowViewState.IdRef="Sequence_103">
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="613.6,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_3" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                                  <ui:FilterDataTable.Filters>
                                                                    <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                                      <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                        <ui:FilterOperationArgument.Column>
                                                                          <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                        </ui:FilterOperationArgument.Column>
                                                                        <ui:FilterOperationArgument.Operand>
                                                                          <InArgument x:TypeArguments="x:Object">[rows(Cint(登録する元の位置)-1)]</InArgument>
                                                                        </ui:FilterOperationArgument.Operand>
                                                                      </ui:FilterOperationArgument>
                                                                    </scg:List>
                                                                  </ui:FilterDataTable.Filters>
                                                                  <ui:FilterDataTable.SelectColumns>
                                                                    <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                                      <x:Null />
                                                                    </scg:List>
                                                                  </ui:FilterDataTable.SelectColumns>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                </ui:FilterDataTable>
                                                                <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="613.6,363.2" sap2010:WorkflowViewState.IdRef="If_5">
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <If.Then>
                                                                    <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_102">
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                      <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_75">
                                                                        <Assign.To>
                                                                          <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                        </Assign.To>
                                                                        <Assign.Value>
                                                                          <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                        </Assign.Value>
                                                                      </Assign>
                                                                    </Sequence>
                                                                  </If.Then>
                                                                  <If.Else>
                                                                    <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_76">
                                                                      <Assign.To>
                                                                        <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                      </Assign.To>
                                                                      <Assign.Value>
                                                                        <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                      </Assign.Value>
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                    </Assign>
                                                                  </If.Else>
                                                                </If>
                                                              </Sequence>
                                                              <If sap2010:Annotation.AnnotationText="マップデータの必須項目を確認して　必須であればチェックを行いログに出力をする" Condition="[Cint(row(&quot;必須&quot;))=1]" DisplayName="必須チェック If" sap:VirtualizedContainerService.HintSize="483.2,267.2" sap2010:WorkflowViewState.IdRef="If_18">
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <If.Then>
                                                                  <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_20" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                                    <ui:InvokeWorkflowFile.Arguments>
                                                                      <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                      <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                                                                      <InArgument x:TypeArguments="x:String" x:Key="ログ内容">["登録行"+コピー先のエクセルの行.ToString+"登録列"+登録する列の位置.ToString+"のデータは必須です"]</InArgument>
                                                                      <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">Log</InArgument>
                                                                    </ui:InvokeWorkflowFile.Arguments>
                                                                  </ui:InvokeWorkflowFile>
                                                                </If.Then>
                                                              </If>
                                                              <Sequence sap2010:Annotation.AnnotationText="マクロが必要な場合固定で設定をする" DisplayName="マクロ変換処理　Sequence" sap:VirtualizedContainerService.HintSize="483.2,184" sap2010:WorkflowViewState.IdRef="Sequence_196">
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_140">
                                                                  <Assign.To>
                                                                    <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(コピー先のエクセルの行-1)(3)]</OutArgument>
                                                                  </Assign.To>
                                                                  <Assign.Value>
                                                                    <InArgument x:TypeArguments="x:Object">["=A3"]</InArgument>
                                                                  </Assign.Value>
                                                                </Assign>
                                                              </Sequence>
                                                              <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_60">
                                                                <Assign.To>
                                                                  <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(コピー先のエクセルの行-1)(Cint(登録する列の位置)-1)]</OutArgument>
                                                                </Assign.To>
                                                                <Assign.Value>
                                                                  <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
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
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:ForEachRow>
                                                    </Sequence>
                                                  </If.Then>
                                                  <If.Else>
                                                    <Sequence sap:VirtualizedContainerService.HintSize="657.6,1760" sap2010:WorkflowViewState.IdRef="Sequence_169">
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <Sequence sap:VirtualizedContainerService.HintSize="616,1575.2" sap2010:WorkflowViewState.IdRef="Sequence_165">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                        <ui:AddDataRow DataRow="{x:Null}" sap2010:Annotation.AnnotationText="追加用データの登録" ArrayRow="[{}]" DataTable="[コピー先データテーブル]" DisplayName="Add Data Row" sap:VirtualizedContainerService.HintSize="574.4,53.6" sap2010:WorkflowViewState.IdRef="AddDataRow_3">
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                        </ui:AddDataRow>
                                                        <Assign sap2010:Annotation.AnnotationText="登録先にあれば更新　検索インデックスが -1 でない場合&#xA;登録先に無ければ追加（新規の物の為）&#xA;最終レコードのカウントを取得" DisplayName="コピー先の位置の確認Assign" sap:VirtualizedContainerService.HintSize="574.4,132.8" sap2010:WorkflowViewState.IdRef="Assign_113">
                                                          <Assign.To>
                                                            <OutArgument x:TypeArguments="x:Int32">[コピー先のエクセルの行]</OutArgument>
                                                          </Assign.To>
                                                          <Assign.Value>
                                                            <InArgument x:TypeArguments="x:Int32">[コピー先データテーブル.rows.Count]</InArgument>
                                                          </Assign.Value>
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                        </Assign>
                                                        <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="転記データを読み込み　登録元から登録先へ追加" DataTable="[MAP]" DisplayName="転記部分 For Each Row" sap:VirtualizedContainerService.HintSize="574.4,1216" sap2010:WorkflowViewState.IdRef="ForEachRow_13">
                                                          <ui:ForEachRow.Body>
                                                            <ActivityAction x:TypeArguments="sd:DataRow">
                                                              <ActivityAction.Argument>
                                                                <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                                                              </ActivityAction.Argument>
                                                              <Sequence DisplayName="マッピングシートの内容でデータの転記 Body" sap:VirtualizedContainerService.HintSize="524.8,1036.8" sap2010:WorkflowViewState.IdRef="Sequence_164">
                                                                <Sequence.Variables>
                                                                  <Variable x:TypeArguments="ui:GenericValue" Name="A" />
                                                                  <Variable x:TypeArguments="ui:GenericValue" Name="B" />
                                                                  <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                                  <Variable x:TypeArguments="x:Int32" Name="登録する後の位置" />
                                                                </Sequence.Variables>
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <Assign sap2010:Annotation.AnnotationText="登録元列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録元セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_114">
                                                                  <Assign.To>
                                                                    <OutArgument x:TypeArguments="x:Int32">[登録する元の位置]</OutArgument>
                                                                  </Assign.To>
                                                                  <Assign.Value>
                                                                    <InArgument x:TypeArguments="x:Int32">[Cint(row(2))]</InArgument>
                                                                  </Assign.Value>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                </Assign>
                                                                <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_115">
                                                                  <Assign.To>
                                                                    <OutArgument x:TypeArguments="x:Int32">[登録する後の位置]</OutArgument>
                                                                  </Assign.To>
                                                                  <Assign.Value>
                                                                    <InArgument x:TypeArguments="x:Int32">[Cint(row(3))]</InArgument>
                                                                  </Assign.Value>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                </Assign>
                                                                <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はそのままセルの値を挿入" DisplayName="登録先データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_116">
                                                                  <Assign.To>
                                                                    <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                                  </Assign.To>
                                                                  <Assign.Value>
                                                                    <InArgument x:TypeArguments="x:String">[rows(Cint(登録する元の位置)-1).ToString]</InArgument>
                                                                  </Assign.Value>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                </Assign>
                                                                <Sequence DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="483.2,67.2" sap2010:WorkflowViewState.IdRef="Sequence_163">
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="333.6,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_8" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                                    <ui:FilterDataTable.Filters>
                                                                      <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                                        <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                          <ui:FilterOperationArgument.Column>
                                                                            <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                          </ui:FilterOperationArgument.Column>
                                                                          <ui:FilterOperationArgument.Operand>
                                                                            <InArgument x:TypeArguments="x:Object">[rows(Cint(登録する元の位置)-1)]</InArgument>
                                                                          </ui:FilterOperationArgument.Operand>
                                                                        </ui:FilterOperationArgument>
                                                                      </scg:List>
                                                                    </ui:FilterDataTable.Filters>
                                                                    <ui:FilterDataTable.SelectColumns>
                                                                      <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                                        <x:Null />
                                                                      </scg:List>
                                                                    </ui:FilterDataTable.SelectColumns>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </ui:FilterDataTable>
                                                                  <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="333.6,94.4" sap2010:WorkflowViewState.IdRef="If_11">
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                        <x:Boolean x:Key="IsPinned">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                    <If.Then>
                                                                      <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_162">
                                                                        <sap:WorkflowViewStateService.ViewState>
                                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          </scg:Dictionary>
                                                                        </sap:WorkflowViewStateService.ViewState>
                                                                        <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_117">
                                                                          <Assign.To>
                                                                            <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                          </Assign.To>
                                                                          <Assign.Value>
                                                                            <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                          </Assign.Value>
                                                                        </Assign>
                                                                      </Sequence>
                                                                    </If.Then>
                                                                    <If.Else>
                                                                      <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_118">
                                                                        <Assign.To>
                                                                          <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                        </Assign.To>
                                                                        <Assign.Value>
                                                                          <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                        </Assign.Value>
                                                                        <sap:WorkflowViewStateService.ViewState>
                                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          </scg:Dictionary>
                                                                        </sap:WorkflowViewStateService.ViewState>
                                                                      </Assign>
                                                                    </If.Else>
                                                                  </If>
                                                                </Sequence>
                                                                <If sap2010:Annotation.AnnotationText="マップデータの必須項目を確認して　必須であればチェックを行いログに出力をする" Condition="[Cint(row(&quot;必須&quot;))=1]" DisplayName="必須チェック If" sap:VirtualizedContainerService.HintSize="483.2,267.2" sap2010:WorkflowViewState.IdRef="If_19">
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <If.Then>
                                                                    <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_21" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                                      <ui:InvokeWorkflowFile.Arguments>
                                                                        <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                        <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                                                                        <InArgument x:TypeArguments="x:String" x:Key="ログ内容">["登録行"+コピー先のエクセルの行.ToString+"登録列"+登録する列の位置.ToString+"のデータは必須です"]</InArgument>
                                                                        <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">Log</InArgument>
                                                                      </ui:InvokeWorkflowFile.Arguments>
                                                                    </ui:InvokeWorkflowFile>
                                                                  </If.Then>
                                                                </If>
                                                                <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_119">
                                                                  <Assign.To>
                                                                    <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(コピー先のエクセルの行-1)(Cint(登録する後の位置)-1)]</OutArgument>
                                                                  </Assign.To>
                                                                  <Assign.Value>
                                                                    <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
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
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                        </ui:ForEachRow>
                                                      </Sequence>
                                                      <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="616,52" sap2010:WorkflowViewState.IdRef="CommentOut_61">
                                                        <ui:CommentOut.Body>
                                                          <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="518.4,1296" sap2010:WorkflowViewState.IdRef="Sequence_168">
                                                            <sap:WorkflowViewStateService.ViewState>
                                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                              </scg:Dictionary>
                                                            </sap:WorkflowViewStateService.ViewState>
                                                            <Sequence sap:VirtualizedContainerService.HintSize="476.8,1203.2" sap2010:WorkflowViewState.IdRef="Sequence_167">
                                                              <sap:WorkflowViewStateService.ViewState>
                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                </scg:Dictionary>
                                                              </sap:WorkflowViewStateService.ViewState>
                                                              <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="435.2,1110.4" sap2010:WorkflowViewState.IdRef="CommentOut_60">
                                                                <ui:CommentOut.Body>
                                                                  <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="396.8,1032" sap2010:WorkflowViewState.IdRef="Sequence_166">
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                    <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="転記データを読み込み　登録元から登録先へ追加" DataTable="[MAP]" DisplayName="転記部分 For Each Row" sap:VirtualizedContainerService.HintSize="355.2,939.2" sap2010:WorkflowViewState.IdRef="ForEachRow_5">
                                                                      <ui:ForEachRow.Body>
                                                                        <ActivityAction x:TypeArguments="sd:DataRow">
                                                                          <ActivityAction.Argument>
                                                                            <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                                                                          </ActivityAction.Argument>
                                                                          <Sequence DisplayName="マッピングシートの内容でデータの転記 Body" sap:VirtualizedContainerService.HintSize="305.6,760" sap2010:WorkflowViewState.IdRef="Sequence_82">
                                                                            <Sequence.Variables>
                                                                              <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                                              <Variable x:TypeArguments="x:Int32" Name="登録する先の位置" />
                                                                            </Sequence.Variables>
                                                                            <sap:WorkflowViewStateService.ViewState>
                                                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                                <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                              </scg:Dictionary>
                                                                            </sap:WorkflowViewStateService.ViewState>
                                                                            <Assign sap2010:Annotation.AnnotationText="登録元列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録元データ Assign" sap:VirtualizedContainerService.HintSize="264,102.4" sap2010:WorkflowViewState.IdRef="Assign_61">
                                                                              <Assign.To>
                                                                                <OutArgument x:TypeArguments="x:Int32">[登録する元の位置]</OutArgument>
                                                                              </Assign.To>
                                                                              <Assign.Value>
                                                                                <InArgument x:TypeArguments="x:Int32">[Cint(row(2))]</InArgument>
                                                                              </Assign.Value>
                                                                              <sap:WorkflowViewStateService.ViewState>
                                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                </scg:Dictionary>
                                                                              </sap:WorkflowViewStateService.ViewState>
                                                                            </Assign>
                                                                            <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="264,102.4" sap2010:WorkflowViewState.IdRef="Assign_62">
                                                                              <Assign.To>
                                                                                <OutArgument x:TypeArguments="x:Int32">[登録する先の位置]</OutArgument>
                                                                              </Assign.To>
                                                                              <Assign.Value>
                                                                                <InArgument x:TypeArguments="x:Int32">[Cint(row(3))]</InArgument>
                                                                              </Assign.Value>
                                                                              <sap:WorkflowViewStateService.ViewState>
                                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                </scg:Dictionary>
                                                                              </sap:WorkflowViewStateService.ViewState>
                                                                            </Assign>
                                                                            <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はセルの位置を設定" DisplayName="登録先セルのデータ Assign" sap:VirtualizedContainerService.HintSize="264,102.4" sap2010:WorkflowViewState.IdRef="Assign_80">
                                                                              <Assign.To>
                                                                                <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                                              </Assign.To>
                                                                              <Assign.Value>
                                                                                <InArgument x:TypeArguments="x:String">[rows(Cint(登録する元の位置)-1).ToString]</InArgument>
                                                                              </Assign.Value>
                                                                              <sap:WorkflowViewStateService.ViewState>
                                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                </scg:Dictionary>
                                                                              </sap:WorkflowViewStateService.ViewState>
                                                                            </Assign>
                                                                            <Sequence DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="264,67.2" sap2010:WorkflowViewState.IdRef="Sequence_105">
                                                                              <sap:WorkflowViewStateService.ViewState>
                                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                  <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                                </scg:Dictionary>
                                                                              </sap:WorkflowViewStateService.ViewState>
                                                                              <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="333.6,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_4" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                                                <ui:FilterDataTable.Filters>
                                                                                  <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                                                    <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                                      <ui:FilterOperationArgument.Column>
                                                                                        <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                                      </ui:FilterOperationArgument.Column>
                                                                                      <ui:FilterOperationArgument.Operand>
                                                                                        <InArgument x:TypeArguments="x:Object">[rows(Cint(登録する元の位置)-1)]</InArgument>
                                                                                      </ui:FilterOperationArgument.Operand>
                                                                                    </ui:FilterOperationArgument>
                                                                                  </scg:List>
                                                                                </ui:FilterDataTable.Filters>
                                                                                <ui:FilterDataTable.SelectColumns>
                                                                                  <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                                                    <x:Null />
                                                                                  </scg:List>
                                                                                </ui:FilterDataTable.SelectColumns>
                                                                                <sap:WorkflowViewStateService.ViewState>
                                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                                  </scg:Dictionary>
                                                                                </sap:WorkflowViewStateService.ViewState>
                                                                              </ui:FilterDataTable>
                                                                              <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="333.6,94.4" sap2010:WorkflowViewState.IdRef="If_6">
                                                                                <sap:WorkflowViewStateService.ViewState>
                                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                    <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                                    <x:Boolean x:Key="IsPinned">True</x:Boolean>
                                                                                  </scg:Dictionary>
                                                                                </sap:WorkflowViewStateService.ViewState>
                                                                                <If.Then>
                                                                                  <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_104">
                                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                      </scg:Dictionary>
                                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                                    <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_77">
                                                                                      <Assign.To>
                                                                                        <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                                      </Assign.To>
                                                                                      <Assign.Value>
                                                                                        <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                                      </Assign.Value>
                                                                                    </Assign>
                                                                                  </Sequence>
                                                                                </If.Then>
                                                                                <If.Else>
                                                                                  <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_78">
                                                                                    <Assign.To>
                                                                                      <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                                    </Assign.To>
                                                                                    <Assign.Value>
                                                                                      <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                                    </Assign.Value>
                                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                                      </scg:Dictionary>
                                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                                  </Assign>
                                                                                </If.Else>
                                                                              </If>
                                                                            </Sequence>
                                                                            <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)&#xD;&#xA;&#xD;&#xA;検索キーで検索があった場合の処理" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="264,132.8" sap2010:WorkflowViewState.IdRef="Assign_65">
                                                                              <Assign.To>
                                                                                <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(検索したセル列の番号)(Cint(登録する先の位置)-1)]</OutArgument>
                                                                              </Assign.To>
                                                                              <Assign.Value>
                                                                                <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
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
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                    </ui:ForEachRow>
                                                                  </Sequence>
                                                                </ui:CommentOut.Body>
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                              </ui:CommentOut>
                                                            </Sequence>
                                                          </Sequence>
                                                        </ui:CommentOut.Body>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:CommentOut>
                                                    </Sequence>
                                                  </If.Else>
                                                </If>
                                              </Sequence>
                                            </Sequence>
                                          </ActivityAction>
                                        </ui:ForEachRow.Body>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                      </ui:ForEachRow>
                                      <ui:OutputDataTable DataTable="[コピー先データテーブル]" DisplayName="Output Data Table" sap:VirtualizedContainerService.HintSize="1450.4,22.4" sap2010:WorkflowViewState.IdRef="OutputDataTable_3" Text="[ログ内容]" />
                                      <Assign sap:VirtualizedContainerService.HintSize="1450.4,60" sap2010:WorkflowViewState.IdRef="Assign_121">
                                        <Assign.To>
                                          <OutArgument x:TypeArguments="scg:List(x:String)">[出力する対象の列]</OutArgument>
                                        </Assign.To>
                                        <Assign.Value>
                                          <InArgument x:TypeArguments="scg:List(x:String)">[new List(Of String)]</InArgument>
                                        </Assign.Value>
                                      </Assign>
                                      <Assign sap:VirtualizedContainerService.HintSize="1450.4,60" sap2010:WorkflowViewState.IdRef="Assign_120">
                                        <Assign.To>
                                          <OutArgument x:TypeArguments="s:String[]">[出力する対象の列2番目]</OutArgument>
                                        </Assign.To>
                                        <Assign.Value>
                                          <InArgument x:TypeArguments="s:String[]">[dic("対応列2").Split(","c)]</InArgument>
                                        </Assign.Value>
                                      </Assign>
                                      <ui:ForEach x:TypeArguments="x:Object" CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="対象する列をコレクションに追加&#xD;&#xA;設定した内容でシートに転記をする" DisplayName="For Each" sap:VirtualizedContainerService.HintSize="1450.4,291.2" sap2010:WorkflowViewState.IdRef="ForEach`1_3" Values="[出力する対象の列2番目]">
                                        <ui:ForEach.Body>
                                          <ActivityAction x:TypeArguments="x:Object">
                                            <ActivityAction.Argument>
                                              <DelegateInArgument x:TypeArguments="x:Object" Name="item" />
                                            </ActivityAction.Argument>
                                            <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="241.6,115.2" sap2010:WorkflowViewState.IdRef="Sequence_170">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <AddToCollection x:TypeArguments="x:String" Collection="[出力する対象の列]" DisplayName="Add To Collection" sap:VirtualizedContainerService.HintSize="200,22.4" sap2010:WorkflowViewState.IdRef="AddToCollection`1_4" Item="[item.ToString]" />
                                            </Sequence>
                                          </ActivityAction>
                                        </ui:ForEach.Body>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                      </ui:ForEach>
                                      <ui:ExcelApplicationScope Password="{x:Null}" DisplayName="Excelに転記レコードをコピー出力をする Excel Application Scope" sap:VirtualizedContainerService.HintSize="1450.4,1175.2" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_12" WorkbookPath="[出力ファイル]">
                                        <ui:ExcelApplicationScope.Body>
                                          <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                                            <ActivityAction.Argument>
                                              <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                                            </ActivityAction.Argument>
                                            <Sequence sap:VirtualizedContainerService.HintSize="518.4,1025.6" sap2010:WorkflowViewState.IdRef="Sequence_88">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <Sequence DisplayName="データ転記の実行 Do" sap:VirtualizedContainerService.HintSize="476.8,932.8" sap2010:WorkflowViewState.IdRef="Sequence_87">
                                                <Sequence.Variables>
                                                  <Variable x:TypeArguments="x:String" Name="res" />
                                                  <Variable x:TypeArguments="x:String" Name="cpText" />
                                                  <Variable x:TypeArguments="scg:List(x:String)" Name="リスト" />
                                                </Sequence.Variables>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                                <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="435.2,236" sap2010:WorkflowViewState.IdRef="CommentOut_78">
                                                  <ui:CommentOut.Body>
                                                    <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="241.6,157.6" sap2010:WorkflowViewState.IdRef="Sequence_204">
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <ui:ExcelCopySheet sap2010:Annotation.AnnotationText="登録ミスの場合の為シートをコピーしておく" DestinationFilePath="[出力ファイル]" DestinationSheetName="[Now.ToString(“yyyyMMddhhmm”)+出力シート]" DisplayName="Copy Sheet" sap:VirtualizedContainerService.HintSize="200,64.8" sap2010:WorkflowViewState.IdRef="ExcelCopySheet_1" SheetName="[出力シート]">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:ExcelCopySheet>
                                                    </Sequence>
                                                  </ui:CommentOut.Body>
                                                </ui:CommentOut>
                                                <ui:ExcelWriteRange AddHeaders="False" sap2010:Annotation.AnnotationText="列指定で出力シートをかき出す&#xD;&#xA;コピー先データテーブル.Select(&quot;&quot;).CopyToDataTable.DefaultView.ToTable(False,出力する対象の列.ToArray)" DataTable="[コピー先データテーブル.Select(&quot;&quot;).CopyToDataTable.DefaultView.ToTable(False,出力する対象の列.ToArray)]" DisplayName="Write Range" sap:VirtualizedContainerService.HintSize="435.2,160.8" sap2010:WorkflowViewState.IdRef="ExcelWriteRange_2" SheetName="[出力シート]" StartingCell="[出力シート位置]">
                                                  <sap:WorkflowViewStateService.ViewState>
                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                    </scg:Dictionary>
                                                  </sap:WorkflowViewStateService.ViewState>
                                                </ui:ExcelWriteRange>
                                                <ui:CommentOut sap2010:Annotation.AnnotationText="全て情報をかき出す場合" DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="435.2,363.2" sap2010:WorkflowViewState.IdRef="CommentOut_73">
                                                  <ui:CommentOut.Body>
                                                    <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="375.2,253.6" sap2010:WorkflowViewState.IdRef="Sequence_199">
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <ui:ExcelWriteRange AddHeaders="False" sap2010:Annotation.AnnotationText="列指定で出力シートをかき出す&#xA;コピー先データテーブル.Select(&quot;&quot;).CopyToDataTable.DefaultView.ToTable(False,出力する対象の列.ToArray)" DataTable="[コピー先データテーブル]" DisplayName="Write Range" sap:VirtualizedContainerService.HintSize="333.6,160.8" sap2010:WorkflowViewState.IdRef="ExcelWriteRange_8" SheetName="[出力シート]" StartingCell="[出力シート位置]">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:ExcelWriteRange>
                                                    </Sequence>
                                                  </ui:CommentOut.Body>
                                                  <sap:WorkflowViewStateService.ViewState>
                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                    </scg:Dictionary>
                                                  </sap:WorkflowViewStateService.ViewState>
                                                </ui:CommentOut>
                                              </Sequence>
                                            </Sequence>
                                          </ActivityAction>
                                        </ui:ExcelApplicationScope.Body>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                      </ui:ExcelApplicationScope>
                                    </Sequence>
                                  </TryCatch.Try>
                                  <TryCatch.Catches>
                                    <Catch x:TypeArguments="s:Exception" sap:VirtualizedContainerService.HintSize="1495.2,21.6" sap2010:WorkflowViewState.IdRef="Catch`1_2">
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <ActivityAction x:TypeArguments="s:Exception">
                                        <ActivityAction.Argument>
                                          <DelegateInArgument x:TypeArguments="s:Exception" Name="exception" />
                                        </ActivityAction.Argument>
                                        <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_20" Text="[exception.ToString]" TopMost="True" />
                                      </ActivityAction>
                                    </Catch>
                                  </TryCatch.Catches>
                                </TryCatch>
                              </Sequence>
                              <FlowStep.Next>
                                <x:Reference>__ReferenceID0</x:Reference>
                              </FlowStep.Next>
                            </FlowStep>
                          </FlowSwitch.Default>
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                              <av:Point x:Key="ShapeLocation">322.4,816.4</av:Point>
                              <av:Size x:Key="ShapeSize">76,87.2</av:Size>
                              <av:PointCollection x:Key="Default">322.4,838.2 100,838.2 100,1016.4</av:PointCollection>
                              <av:PointCollection x:Key="1Connector">397.6,860 640,860 640,1017.6</av:PointCollection>
                              <av:PointCollection x:Key="3Connector">360,903.6 360,1017.6</av:PointCollection>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                          <FlowStep x:Key="3" x:Name="__ReferenceID8">
                            <sap:WorkflowViewStateService.ViewState>
                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                <av:Point x:Key="ShapeLocation">260,1017.6</av:Point>
                                <av:Size x:Key="ShapeSize">200,155.2</av:Size>
                                <av:PointCollection x:Key="ConnectorLocation">360,1172.8 360,1296.4</av:PointCollection>
                              </scg:Dictionary>
                            </sap:WorkflowViewStateService.ViewState>
                            <Sequence sap2010:Annotation.AnnotationText="明細から単票へ登録&#xA;入力タイプ 3&#xA;ＩＤがある場合は更新&#xA;ＩＤがない場合は登録&#xA;" DisplayName="T002_データの転記 マップ2 Sequence" sap:VirtualizedContainerService.HintSize="200,155.2" sap2010:WorkflowViewState.IdRef="Sequence_135">
                              <sap:WorkflowViewStateService.ViewState>
                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                </scg:Dictionary>
                              </sap:WorkflowViewStateService.ViewState>
                              <TryCatch DisplayName="Try Catch" sap:VirtualizedContainerService.HintSize="827.2,3137.6" sap2010:WorkflowViewState.IdRef="TryCatch_3">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                                <TryCatch.Try>
                                  <Sequence DisplayName="シートに転記をして追加 Sequence" sap:VirtualizedContainerService.HintSize="790.4,2910.4" sap2010:WorkflowViewState.IdRef="Sequence_134">
                                    <Sequence.Variables>
                                      <Variable x:TypeArguments="sd:DataTable" Name="コピー先データテーブル" />
                                      <Variable x:TypeArguments="ui:GenericValue" Name="i" />
                                      <Variable x:TypeArguments="ui:GenericValue" Name="dt" />
                                      <Variable x:TypeArguments="sd:DataRow" Name="dtRow" />
                                      <Variable x:TypeArguments="ui:GenericValue" Name="登録登録元" />
                                      <Variable x:TypeArguments="sd:DataTable" Name="登録元エクセル" />
                                      <Variable x:TypeArguments="sd:DataTable" Name="登録先エクセル" />
                                      <Variable x:TypeArguments="sd:DataTable" Name="マッピングファイル" />
                                      <Variable x:TypeArguments="x:Int32" Name="登録モード" />
                                      <Variable x:TypeArguments="x:String" Name="出力ファイル名" />
                                      <Variable x:TypeArguments="x:String" Name="出力先シート" />
                                      <Variable x:TypeArguments="x:String" Name="variable1" />
                                    </Sequence.Variables>
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                    <Assign sap2010:Annotation.AnnotationText="input値をコピーして処理" sap:VirtualizedContainerService.HintSize="748.8,91.2" sap2010:WorkflowViewState.IdRef="Assign_83">
                                      <Assign.To>
                                        <OutArgument x:TypeArguments="sd:DataTable">[コピー先データテーブル]</OutArgument>
                                      </Assign.To>
                                      <Assign.Value>
                                        <InArgument x:TypeArguments="sd:DataTable">[コピー先データ]</InArgument>
                                      </Assign.Value>
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                    </Assign>
                                    <Assign sap:VirtualizedContainerService.HintSize="748.8,60" sap2010:WorkflowViewState.IdRef="Assign_84">
                                      <Assign.To>
                                        <OutArgument x:TypeArguments="sd:DataTable">[登録先エクセル]</OutArgument>
                                      </Assign.To>
                                      <Assign.Value>
                                        <InArgument x:TypeArguments="sd:DataTable">[コピー先データ]</InArgument>
                                      </Assign.Value>
                                    </Assign>
                                    <ui:ForEachRow CurrentIndex="{x:Null}" DataTable="[input]" DisplayName="データの転記 For Each Row" sap:VirtualizedContainerService.HintSize="748.8,1966.4" sap2010:WorkflowViewState.IdRef="ForEachRow_10">
                                      <ui:ForEachRow.Body>
                                        <ActivityAction x:TypeArguments="sd:DataRow">
                                          <ActivityAction.Argument>
                                            <DelegateInArgument x:TypeArguments="sd:DataRow" Name="rows" />
                                          </ActivityAction.Argument>
                                          <Sequence DisplayName="登録　更新処理 Sequence" sap:VirtualizedContainerService.HintSize="699.2,1818.4" sap2010:WorkflowViewState.IdRef="Sequence_127">
                                            <Sequence.Variables>
                                              <Variable x:TypeArguments="x:Int32" Name="検索したセル列の番号" />
                                              <Variable x:TypeArguments="ui:GenericValue" Name="検索したセルの値" />
                                            </Sequence.Variables>
                                            <sap:WorkflowViewStateService.ViewState>
                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                              </scg:Dictionary>
                                            </sap:WorkflowViewStateService.ViewState>
                                            <Sequence sap:VirtualizedContainerService.HintSize="657.6,1725.6" sap2010:WorkflowViewState.IdRef="Sequence_126">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="転記データを読み込み　登録元から登録先へ追加" DataTable="[MAP]" DisplayName="転記部分 For Each Row" sap:VirtualizedContainerService.HintSize="616,1632.8" sap2010:WorkflowViewState.IdRef="ForEachRow_9">
                                                <ui:ForEachRow.Body>
                                                  <ActivityAction x:TypeArguments="sd:DataRow">
                                                    <ActivityAction.Argument>
                                                      <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                                                    </ActivityAction.Argument>
                                                    <Sequence DisplayName="マッピングシートの内容でデータの転記 Body" sap:VirtualizedContainerService.HintSize="566.4,1453.6" sap2010:WorkflowViewState.IdRef="Sequence_125">
                                                      <Sequence.Variables>
                                                        <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                        <Variable x:TypeArguments="x:Int32" Name="登録する後の位置" />
                                                        <Variable x:TypeArguments="x:Int32" Name="登録する行の位置" />
                                                        <Variable x:TypeArguments="x:Int32" Name="登録する列の位置" />
                                                      </Sequence.Variables>
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <Assign sap2010:Annotation.AnnotationText="登録元列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録元セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="524.8,102.4" sap2010:WorkflowViewState.IdRef="Assign_91">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:Int32">[登録する元の位置]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:Int32">[Cint(row(4))-1]</InArgument>
                                                        </Assign.Value>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </Assign>
                                                      <Assign sap2010:Annotation.AnnotationText="登録先の行の位置" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="524.8,91.2" sap2010:WorkflowViewState.IdRef="Assign_93">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:Int32">[登録する行の位置]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:Int32">[Cint(row(2))-1]</InArgument>
                                                        </Assign.Value>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </Assign>
                                                      <Assign sap2010:Annotation.AnnotationText="登録する列の位置" DisplayName="登録先セルの列位置データ Assign" sap:VirtualizedContainerService.HintSize="524.8,91.2" sap2010:WorkflowViewState.IdRef="Assign_92">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:Int32">[登録する列の位置]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:Int32">[Cint(row(3))-1]</InArgument>
                                                        </Assign.Value>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </Assign>
                                                      <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はそのままセルの値を挿入" DisplayName="登録元データ Assign" sap:VirtualizedContainerService.HintSize="524.8,102.4" sap2010:WorkflowViewState.IdRef="Assign_94">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:String">[rows(Cint(登録する元の位置)).ToString]</InArgument>
                                                        </Assign.Value>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </Assign>
                                                      <Sequence DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="524.8,625.6" sap2010:WorkflowViewState.IdRef="Sequence_124">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                        <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="483.2,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_6" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                          <ui:FilterDataTable.Filters>
                                                            <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                              <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                <ui:FilterOperationArgument.Column>
                                                                  <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                </ui:FilterOperationArgument.Column>
                                                                <ui:FilterOperationArgument.Operand>
                                                                  <InArgument x:TypeArguments="x:Object">[rows(Cint(登録する元の位置))]</InArgument>
                                                                </ui:FilterOperationArgument.Operand>
                                                              </ui:FilterOperationArgument>
                                                            </scg:List>
                                                          </ui:FilterDataTable.Filters>
                                                          <ui:FilterDataTable.SelectColumns>
                                                            <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                              <x:Null />
                                                            </scg:List>
                                                          </ui:FilterDataTable.SelectColumns>
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                        </ui:FilterDataTable>
                                                        <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="483.2,94.4" sap2010:WorkflowViewState.IdRef="If_9">
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                              <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                          <If.Then>
                                                            <Sequence sap2010:Annotation.AnnotationText="登録データの設定&#xA;変換結果(0)(1).ToString" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="305.6,195.2" sap2010:WorkflowViewState.IdRef="Sequence_123">
                                                              <sap:WorkflowViewStateService.ViewState>
                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                </scg:Dictionary>
                                                              </sap:WorkflowViewStateService.ViewState>
                                                              <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_95">
                                                                <Assign.To>
                                                                  <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                </Assign.To>
                                                                <Assign.Value>
                                                                  <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                </Assign.Value>
                                                              </Assign>
                                                            </Sequence>
                                                          </If.Then>
                                                          <If.Else>
                                                            <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_96">
                                                              <Assign.To>
                                                                <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                              </Assign.To>
                                                              <Assign.Value>
                                                                <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                              </Assign.Value>
                                                              <sap:WorkflowViewStateService.ViewState>
                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                </scg:Dictionary>
                                                              </sap:WorkflowViewStateService.ViewState>
                                                            </Assign>
                                                          </If.Else>
                                                        </If>
                                                        <If sap2010:Annotation.AnnotationText="マップデータの必須項目を確認して　必須であればチェックを行いログに出力をする" Condition="[Cint(row(&quot;必須&quot;))=1]" DisplayName="必須チェック If" sap:VirtualizedContainerService.HintSize="483.2,267.2" sap2010:WorkflowViewState.IdRef="If_20">
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                          <If.Then>
                                                            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_22" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                              <ui:InvokeWorkflowFile.Arguments>
                                                                <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                                                                <InArgument x:TypeArguments="x:String" x:Key="ログ内容">["登録行"+コピー先のエクセルの行.ToString+"登録列"+登録する列の位置.ToString+"のデータは必須です"]</InArgument>
                                                                <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">Log</InArgument>
                                                              </ui:InvokeWorkflowFile.Arguments>
                                                            </ui:InvokeWorkflowFile>
                                                          </If.Then>
                                                        </If>
                                                      </Sequence>
                                                      <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)&#xA;&#xA;コピー先データテーブル(登録する行の位置)(Cint(登録する列の位置))" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="524.8,148" sap2010:WorkflowViewState.IdRef="Assign_97">
                                                        <Assign.To>
                                                          <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(登録する行の位置)(Cint(登録する列の位置))]</OutArgument>
                                                        </Assign.To>
                                                        <Assign.Value>
                                                          <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
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
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:ForEachRow>
                                            </Sequence>
                                          </Sequence>
                                        </ActivityAction>
                                      </ui:ForEachRow.Body>
                                    </ui:ForEachRow>
                                    <ui:OutputDataTable DataTable="[コピー先データテーブル]" DisplayName="Output Data Table" sap:VirtualizedContainerService.HintSize="748.8,22.4" sap2010:WorkflowViewState.IdRef="OutputDataTable_4" Text="[ログ内容]" />
                                    <ui:ExcelApplicationScope Password="{x:Null}" DisplayName="Excelに転記レコードをコピー出力をする Excel Application Scope" sap:VirtualizedContainerService.HintSize="748.8,517.6" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_16" WorkbookPath="[出力ファイル]">
                                      <ui:ExcelApplicationScope.Body>
                                        <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                                          <ActivityAction.Argument>
                                            <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                                          </ActivityAction.Argument>
                                          <Sequence sap:VirtualizedContainerService.HintSize="416.8,408" sap2010:WorkflowViewState.IdRef="Sequence_133">
                                            <sap:WorkflowViewStateService.ViewState>
                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                              </scg:Dictionary>
                                            </sap:WorkflowViewStateService.ViewState>
                                            <Sequence DisplayName="データ転記の実行 Do" sap:VirtualizedContainerService.HintSize="375.2,315.2" sap2010:WorkflowViewState.IdRef="Sequence_132">
                                              <Sequence.Variables>
                                                <Variable x:TypeArguments="x:String" Name="res" />
                                              </Sequence.Variables>
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:ExcelWriteRange AddHeaders="False" DataTable="[コピー先データテーブル]" DisplayName="Write Range" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="ExcelWriteRange_4" SheetName="[出力シート]" StartingCell="[出力シート位置]" />
                                              <ui:CommentOut sap2010:Annotation.AnnotationText="登録後ファイルコピー&#xA;シートをコピーで対応" DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="333.6,94.4" sap2010:WorkflowViewState.IdRef="CommentOut_44">
                                                <ui:CommentOut.Body>
                                                  <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="375.2,176" sap2010:WorkflowViewState.IdRef="Sequence_131">
                                                    <sap:WorkflowViewStateService.ViewState>
                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                      </scg:Dictionary>
                                                    </sap:WorkflowViewStateService.ViewState>
                                                    <uga:MoveDriveFile FileId="{x:Null}" FileName="{x:Null}" NewParentId="{x:Null}" AuthScopesInvalid="False" DisplayName="Move File" sap:VirtualizedContainerService.HintSize="333.6,83.2" sap2010:WorkflowViewState.IdRef="MoveDriveFile_2" SupportsTeamDrives="False" />
                                                  </Sequence>
                                                </ui:CommentOut.Body>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:CommentOut>
                                            </Sequence>
                                          </Sequence>
                                        </ActivityAction>
                                      </ui:ExcelApplicationScope.Body>
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                    </ui:ExcelApplicationScope>
                                  </Sequence>
                                </TryCatch.Try>
                                <TryCatch.Catches>
                                  <Catch x:TypeArguments="s:Exception" sap:VirtualizedContainerService.HintSize="793.6,21.6" sap2010:WorkflowViewState.IdRef="Catch`1_3">
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                    <ActivityAction x:TypeArguments="s:Exception">
                                      <ActivityAction.Argument>
                                        <DelegateInArgument x:TypeArguments="s:Exception" Name="exception" />
                                      </ActivityAction.Argument>
                                      <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_25" Text="[exception.ToString]" TopMost="True" />
                                    </ActivityAction>
                                  </Catch>
                                </TryCatch.Catches>
                              </TryCatch>
                            </Sequence>
                            <FlowStep.Next>
                              <FlowStep x:Name="__ReferenceID0">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <av:Point x:Key="ShapeLocation">260,1296.4</av:Point>
                                    <av:Size x:Key="ShapeSize">200,98.4</av:Size>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                                <Sequence sap2010:Annotation.AnnotationText="処理が終わったファイルを移動する" DisplayName="T005_ファイルの移動 Sequence" sap:VirtualizedContainerService.HintSize="200,98.4" sap2010:WorkflowViewState.IdRef="Sequence_69">
                                  <Sequence.Variables>
                                    <Variable x:TypeArguments="s:String[]" Name="moveFiles" />
                                  </Sequence.Variables>
                                  <sap:WorkflowViewStateService.ViewState>
                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                    </scg:Dictionary>
                                  </sap:WorkflowViewStateService.ViewState>
                                  <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="200,52" sap2010:WorkflowViewState.IdRef="CommentOut_67">
                                    <ui:CommentOut.Body>
                                      <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="241.6,115.2" sap2010:WorkflowViewState.IdRef="Sequence_186">
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                        <ui:CopyFile ContinueOnError="{x:Null}" Destination="Output\test.xslx" DisplayName="Copy File" sap:VirtualizedContainerService.HintSize="200,22.4" sap2010:WorkflowViewState.IdRef="CopyFile_1" Overwrite="False" Path="[in_入力ファイル]" />
                                      </Sequence>
                                    </ui:CommentOut.Body>
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                  </ui:CommentOut>
                                  <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="200,52" sap2010:WorkflowViewState.IdRef="CommentOut_74">
                                    <ui:CommentOut.Body>
                                      <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="305.6,152.8" sap2010:WorkflowViewState.IdRef="Sequence_200">
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                        <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_141">
                                          <Assign.To>
                                            <OutArgument x:TypeArguments="s:String[]">[moveFiles]</OutArgument>
                                          </Assign.To>
                                          <Assign.Value>
                                            <InArgument x:TypeArguments="s:String[]">[Dictionary.GetFiles(入力シート複数)]</InArgument>
                                          </Assign.Value>
                                        </Assign>
                                      </Sequence>
                                    </ui:CommentOut.Body>
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                  </ui:CommentOut>
                                  <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="200,52" sap2010:WorkflowViewState.IdRef="CommentOut_76">
                                    <ui:CommentOut.Body>
                                      <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="241.6,115.2" sap2010:WorkflowViewState.IdRef="Sequence_202">
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                        <ui:MoveFile ContinueOnError="{x:Null}" Destination="Output" DisplayName="Move File" sap:VirtualizedContainerService.HintSize="200,22.4" sap2010:WorkflowViewState.IdRef="MoveFile_1" Overwrite="False" Path="[in_入力ファイル]" />
                                      </Sequence>
                                    </ui:CommentOut.Body>
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                  </ui:CommentOut>
                                </Sequence>
                              </FlowStep>
                            </FlowStep.Next>
                          </FlowStep>
                          <FlowStep x:Key="1" x:Name="__ReferenceID9">
                            <sap:WorkflowViewStateService.ViewState>
                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                <av:Point x:Key="ShapeLocation">540,1017.6</av:Point>
                                <av:Size x:Key="ShapeSize">200,170.4</av:Size>
                                <av:PointCollection x:Key="ConnectorLocation">640,1188 640,1345.6 460,1345.6</av:PointCollection>
                              </scg:Dictionary>
                            </sap:WorkflowViewStateService.ViewState>
                            <Sequence sap2010:Annotation.AnnotationText="単票から明細へ登録&#xA;入力タイプ１&#xA;ＩＤがある場合は更新&#xA;ＩＤがない場合は登録&#xD;&#xA;*)今回は全て新規登録&#xA;" DisplayName="T003_データの転記 マップ2 Sequence" sap:VirtualizedContainerService.HintSize="200,170.4" sap2010:WorkflowViewState.IdRef="Sequence_148">
                              <sap:WorkflowViewStateService.ViewState>
                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                </scg:Dictionary>
                              </sap:WorkflowViewStateService.ViewState>
                              <Assign sap2010:Annotation.AnnotationText="コピー用のデータを作成&#xD;&#xA;invokeの際確認しやすい為&#xD;&#xA;&#xD;&#xA;Out コピー先データテーブル" sap:VirtualizedContainerService.HintSize="1223.2,132.8" sap2010:WorkflowViewState.IdRef="Assign_99">
                                <Assign.To>
                                  <OutArgument x:TypeArguments="sd:DataTable">[コピー先データテーブル]</OutArgument>
                                </Assign.To>
                                <Assign.Value>
                                  <InArgument x:TypeArguments="sd:DataTable">[コピー先データ]</InArgument>
                                </Assign.Value>
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                              </Assign>
                              <Sequence sap2010:Annotation.AnnotationText="連番キーの作製" DisplayName="登録するシートのＩＤ検索Sequence" sap:VirtualizedContainerService.HintSize="1223.2,368.8" sap2010:WorkflowViewState.IdRef="Sequence_194">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                                <ui:LookupDataTable LookupColumnName="{x:Null}" LookupDataColumn="{x:Null}" TargetColumnName="{x:Null}" TargetDataColumn="{x:Null}" sap2010:Annotation.AnnotationText="帳票のＩＤで明細内容の検索&#xA;ある場合更新無い場合は追加&#xA;&#xA;In　転記シートＩＤ&#xA;Out 検索したセル列の番号" DataTable="[コピー先データテーブル]" DisplayName="出力先のID検索 Lookup Data Table" sap:VirtualizedContainerService.HintSize="200,110.4" sap2010:WorkflowViewState.IdRef="LookupDataTable_4" LookupColumnIndex="[0]" LookupValue="[転記シートID]" RowIndex="[検索したセル列の番号]" TargetColumnIndex="[0]">
                                  <ui:LookupDataTable.CellValue>
                                    <OutArgument x:TypeArguments="ui:GenericValue">[検索したセルの値]</OutArgument>
                                  </ui:LookupDataTable.CellValue>
                                  <sap:WorkflowViewStateService.ViewState>
                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                    </scg:Dictionary>
                                  </sap:WorkflowViewStateService.ViewState>
                                </ui:LookupDataTable>
                                <If sap2010:Annotation.AnnotationText="IDがなかったら　出力シートに追加して　最終行を取得" Condition="[検索したセル列の番号 = -1]" DisplayName="IDがなかったら　出力シートに追加して　最終行を取得 If" sap:VirtualizedContainerService.HintSize="200,94.4" sap2010:WorkflowViewState.IdRef="If_17">
                                  <sap:WorkflowViewStateService.ViewState>
                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                      <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                    </scg:Dictionary>
                                  </sap:WorkflowViewStateService.ViewState>
                                  <If.Then>
                                    <Sequence sap:VirtualizedContainerService.HintSize="375.2,388" sap2010:WorkflowViewState.IdRef="Sequence_193">
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <ui:AddDataRow DataRow="{x:Null}" ArrayRow="[{}]" DataTable="[コピー先データテーブル]" DisplayName="Add Data Row" sap:VirtualizedContainerService.HintSize="333.6,22.4" sap2010:WorkflowViewState.IdRef="AddDataRow_5" />
                                      <Assign sap2010:Annotation.AnnotationText="登録先にあれば更新　検索インデックスが -1 でない場合&#xA;登録先に無ければ追加（新規の物の為）&#xA;最終レコードのカウントを取得" DisplayName="コピー先の位置の確認Assign" sap:VirtualizedContainerService.HintSize="333.6,132.8" sap2010:WorkflowViewState.IdRef="Assign_139">
                                        <Assign.To>
                                          <OutArgument x:TypeArguments="x:String">[転記シートID]</OutArgument>
                                        </Assign.To>
                                        <Assign.Value>
                                          <InArgument x:TypeArguments="x:String">[((コピー先データテーブル.rows.Count)-1).ToString]</InArgument>
                                        </Assign.Value>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                      </Assign>
                                      <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_38" Text="[&quot;転記シートＩＤは&quot;+転記シートID]" TopMost="True" />
                                    </Sequence>
                                  </If.Then>
                                </If>
                              </Sequence>
                              <ui:ForEach x:TypeArguments="x:Object" CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="テンプレートで設定した複数のシートのデータを取得する&#xD;&#xA;ＭＡＰ項目に対応シート名は記載&#xD;&#xA;&#xD;&#xA;複数シート項目に対応シートを記載" DisplayName="For Each" sap:VirtualizedContainerService.HintSize="1223.2,4600.8" sap2010:WorkflowViewState.IdRef="ForEach`1_4" Values="[入力シート複数]">
                                <ui:ForEach.Body>
                                  <ActivityAction x:TypeArguments="x:Object">
                                    <ActivityAction.Argument>
                                      <DelegateInArgument x:TypeArguments="x:Object" Name="item" />
                                    </ActivityAction.Argument>
                                    <Sequence sap:VirtualizedContainerService.HintSize="1188,4394.4" sap2010:WorkflowViewState.IdRef="Sequence_191">
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <ui:ExcelApplicationScope Password="{x:Null}" sap2010:Annotation.AnnotationText="単票の値を読んでデータテーブルに展開する&#xA;読み込む　場所の設定をする&#xA;余計な項目がある為&#xA;&#xA;出力　MAP {DataTable}" DisplayName="入力の値を読み込む（Excel Application Scope）" sap:VirtualizedContainerService.HintSize="1146.4,744.8" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_19" Visible="False" WorkbookPath="[in_入力ファイル]">
                                        <ui:ExcelApplicationScope.Body>
                                          <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                                            <ActivityAction.Argument>
                                              <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                                            </ActivityAction.Argument>
                                            <Sequence sap2010:Annotation.AnnotationText="パラメーターで設定したシートを順次読み込む" sap:VirtualizedContainerService.HintSize="524.8,547.2" sap2010:WorkflowViewState.IdRef="Sequence_192">
                                              <Sequence.Variables>
                                                <Variable x:TypeArguments="sd:DataTable" Name="filterDT" />
                                              </Sequence.Variables>
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:ExcelReadRange AddHeaders="False" sap2010:Annotation.AnnotationText="入力の値を読み取る&#xA;IN テンプレートで設定した複数シート項目&#xA;OUT　変換先" DataTable="[input]" DisplayName="Read Range" sap:VirtualizedContainerService.HintSize="483.2,117.6" sap2010:WorkflowViewState.IdRef="ExcelReadRange_12" Range="[入力シート位置]" SheetName="[item.ToString]">
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:ExcelReadRange>
                                              <If sap2010:Annotation.AnnotationText="初期化で設定した[主キー] を元にデータレコード番号を取得&#xD;&#xA;在る場合はログに番号を記載して登録をする&#xD;&#xA;判定条件３「明細から詳細」は既にレコードがあるので　判定から条件を外す" Condition="[Cint(判定条件) &lt;&gt; 3]" DisplayName="IDがある場合はフィルターを設定をする If" sap:VirtualizedContainerService.HintSize="483.2,265.6" sap2010:WorkflowViewState.IdRef="If_16">
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                                <If.Else>
                                                  <ui:FilterDataTable DataTable="[input]" DisplayName="Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="FilterDataTable_13" OutputDataTable="[input]" SelectColumnsMode="Keep">
                                                    <ui:FilterDataTable.Filters>
                                                      <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                        <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                          <ui:FilterOperationArgument.Column>
                                                            <InArgument x:TypeArguments="x:Int32">[0]</InArgument>
                                                          </ui:FilterOperationArgument.Column>
                                                          <ui:FilterOperationArgument.Operand>
                                                            <InArgument x:TypeArguments="x:String">[転記シートID]</InArgument>
                                                          </ui:FilterOperationArgument.Operand>
                                                        </ui:FilterOperationArgument>
                                                      </scg:List>
                                                    </ui:FilterDataTable.Filters>
                                                    <ui:FilterDataTable.SelectColumns>
                                                      <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                        <x:Null />
                                                      </scg:List>
                                                    </ui:FilterDataTable.SelectColumns>
                                                  </ui:FilterDataTable>
                                                </If.Else>
                                              </If>
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
                                      <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="1146.4,3516.8" sap2010:WorkflowViewState.IdRef="Sequence_190">
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                        <TryCatch DisplayName="Try Catch" sap:VirtualizedContainerService.HintSize="1104.8,3424" sap2010:WorkflowViewState.IdRef="TryCatch_4">
                                          <sap:WorkflowViewStateService.ViewState>
                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                            </scg:Dictionary>
                                          </sap:WorkflowViewStateService.ViewState>
                                          <TryCatch.Try>
                                            <Sequence DisplayName="シートに転記をして追加 Sequence" sap:VirtualizedContainerService.HintSize="1068,3196.8" sap2010:WorkflowViewState.IdRef="Sequence_147">
                                              <Sequence.Variables>
                                                <Variable x:TypeArguments="ui:GenericValue" Name="登録登録元" />
                                                <Variable x:TypeArguments="sd:DataTable" Name="登録元エクセル" />
                                                <Variable x:TypeArguments="sd:DataTable" Name="登録先エクセル" />
                                                <Variable x:TypeArguments="sd:DataTable" Name="マッピングファイル" />
                                                <Variable x:TypeArguments="x:Int32" Name="登録モード" />
                                                <Variable x:TypeArguments="x:String" Name="出力ファイル名" />
                                                <Variable x:TypeArguments="x:String" Name="出力先シート" />
                                                <Variable x:TypeArguments="x:String" Name="variable1" />
                                                <Variable x:TypeArguments="sd:DataTable" Name="対象マップ" />
                                              </Sequence.Variables>
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:FilterDataTable sap2010:Annotation.AnnotationText="登録する先のMAPINGデータの取得&#xD;&#xA;テンプレート項目　複数シートで設定した　入力シート分だけ対応　&#xD;&#xA;その内容で ＭＡＰをシート名で絞り込み　登録をする" DataTable="[MAP]" DisplayName="Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="1026.4,132.8" sap2010:WorkflowViewState.IdRef="FilterDataTable_12" OutputDataTable="[対象マップ]" SelectColumnsMode="Keep">
                                                <ui:FilterDataTable.Filters>
                                                  <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                    <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                      <ui:FilterOperationArgument.Column>
                                                        <InArgument x:TypeArguments="x:String">["シート名"]</InArgument>
                                                      </ui:FilterOperationArgument.Column>
                                                      <ui:FilterOperationArgument.Operand>
                                                        <InArgument x:TypeArguments="x:String">[item.ToString]</InArgument>
                                                      </ui:FilterOperationArgument.Operand>
                                                    </ui:FilterOperationArgument>
                                                  </scg:List>
                                                </ui:FilterDataTable.Filters>
                                                <ui:FilterDataTable.SelectColumns>
                                                  <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                    <x:Null />
                                                  </scg:List>
                                                </ui:FilterDataTable.SelectColumns>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:FilterDataTable>
                                              <ui:OutputDataTable DataTable="[対象マップ]" DisplayName="Output Data Table" sap:VirtualizedContainerService.HintSize="1026.4,22.4" sap2010:WorkflowViewState.IdRef="OutputDataTable_6" Text="[ログ内容]" />
                                              <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="1026.4,540" sap2010:WorkflowViewState.IdRef="CommentOut_70">
                                                <ui:CommentOut.Body>
                                                  <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="283.2,461.6" sap2010:WorkflowViewState.IdRef="Sequence_195">
                                                    <sap:WorkflowViewStateService.ViewState>
                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                      </scg:Dictionary>
                                                    </sap:WorkflowViewStateService.ViewState>
                                                    <Sequence sap2010:Annotation.AnnotationText="連番キーの作製" DisplayName="登録するシートのＩＤ検索Sequence" sap:VirtualizedContainerService.HintSize="241.6,368.8" sap2010:WorkflowViewState.IdRef="Sequence_182">
                                                      <sap:WorkflowViewStateService.ViewState>
                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                        </scg:Dictionary>
                                                      </sap:WorkflowViewStateService.ViewState>
                                                      <ui:LookupDataTable LookupColumnName="{x:Null}" LookupDataColumn="{x:Null}" TargetColumnName="{x:Null}" TargetDataColumn="{x:Null}" sap2010:Annotation.AnnotationText="帳票のＩＤで明細内容の検索&#xA;ある場合更新無い場合は追加&#xD;&#xA;&#xD;&#xA;In　転記シートＩＤ&#xD;&#xA;Out 検索したセル列の番号" DataTable="[コピー先データテーブル]" DisplayName="出力先のID検索 Lookup Data Table" sap:VirtualizedContainerService.HintSize="200,110.4" sap2010:WorkflowViewState.IdRef="LookupDataTable_3" LookupColumnIndex="[0]" LookupValue="[転記シートID]" RowIndex="[検索したセル列の番号]" TargetColumnIndex="[0]">
                                                        <ui:LookupDataTable.CellValue>
                                                          <OutArgument x:TypeArguments="ui:GenericValue">[検索したセルの値]</OutArgument>
                                                        </ui:LookupDataTable.CellValue>
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                      </ui:LookupDataTable>
                                                      <If sap2010:Annotation.AnnotationText="IDがなかったら　出力シートに追加して　最終行を取得" Condition="[検索したセル列の番号 = -1]" DisplayName="IDがなかったら　出力シートに追加して　最終行を取得 If" sap:VirtualizedContainerService.HintSize="200,94.4" sap2010:WorkflowViewState.IdRef="If_15">
                                                        <sap:WorkflowViewStateService.ViewState>
                                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                            <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                            <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                            <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                          </scg:Dictionary>
                                                        </sap:WorkflowViewStateService.ViewState>
                                                        <If.Then>
                                                          <Sequence sap:VirtualizedContainerService.HintSize="375.2,388" sap2010:WorkflowViewState.IdRef="Sequence_185">
                                                            <sap:WorkflowViewStateService.ViewState>
                                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                              </scg:Dictionary>
                                                            </sap:WorkflowViewStateService.ViewState>
                                                            <ui:AddDataRow DataRow="{x:Null}" ArrayRow="[{}]" DataTable="[コピー先データテーブル]" DisplayName="Add Data Row" sap:VirtualizedContainerService.HintSize="333.6,22.4" sap2010:WorkflowViewState.IdRef="AddDataRow_4" />
                                                            <Assign sap2010:Annotation.AnnotationText="登録先にあれば更新　検索インデックスが -1 でない場合&#xA;登録先に無ければ追加（新規の物の為）&#xA;最終レコードのカウントを取得" DisplayName="コピー先の位置の確認Assign" sap:VirtualizedContainerService.HintSize="333.6,132.8" sap2010:WorkflowViewState.IdRef="Assign_133">
                                                              <Assign.To>
                                                                <OutArgument x:TypeArguments="x:String">[転記シートID]</OutArgument>
                                                              </Assign.To>
                                                              <Assign.Value>
                                                                <InArgument x:TypeArguments="x:String">[((コピー先データテーブル.rows.Count)-1).ToString]</InArgument>
                                                              </Assign.Value>
                                                              <sap:WorkflowViewStateService.ViewState>
                                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                  <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                </scg:Dictionary>
                                                              </sap:WorkflowViewStateService.ViewState>
                                                            </Assign>
                                                            <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_37" Text="[&quot;転記シートＩＤは&quot;+転記シートID]" TopMost="True" />
                                                          </Sequence>
                                                        </If.Then>
                                                      </If>
                                                    </Sequence>
                                                  </Sequence>
                                                </ui:CommentOut.Body>
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:CommentOut>
                                              <Sequence DisplayName="登録　更新処理 Sequence" sap:VirtualizedContainerService.HintSize="1026.4,2226.4" sap2010:WorkflowViewState.IdRef="Sequence_140">
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                                <Sequence sap:VirtualizedContainerService.HintSize="984.8,2133.6" sap2010:WorkflowViewState.IdRef="Sequence_139">
                                                  <sap:WorkflowViewStateService.ViewState>
                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                    </scg:Dictionary>
                                                  </sap:WorkflowViewStateService.ViewState>
                                                  <ui:ForEachRow CurrentIndex="{x:Null}" sap2010:Annotation.AnnotationText="転記データを読み込み　登録元から登録先へ追加&#xD;&#xA;対象マップ　シート名で転記するデータの取得" DataTable="[対象マップ]" DisplayName="転記部分 For Each Row" sap:VirtualizedContainerService.HintSize="943.2,2040.8" sap2010:WorkflowViewState.IdRef="ForEachRow_12">
                                                    <ui:ForEachRow.Body>
                                                      <ActivityAction x:TypeArguments="sd:DataRow">
                                                        <ActivityAction.Argument>
                                                          <DelegateInArgument x:TypeArguments="sd:DataRow" Name="row" />
                                                        </ActivityAction.Argument>
                                                        <Sequence sap:VirtualizedContainerService.HintSize="893.6,1850.4" sap2010:WorkflowViewState.IdRef="Sequence_175">
                                                          <sap:WorkflowViewStateService.ViewState>
                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                            </scg:Dictionary>
                                                          </sap:WorkflowViewStateService.ViewState>
                                                          <If sap2010:Annotation.AnnotationText="検索内容によって処理を変更する　&#xD;&#xA;キーが無い場合は追加　&#xD;&#xA;ある場合は更新" Condition="[検索したセル列の番号.ToString = &quot;-1&quot;]" sap:VirtualizedContainerService.HintSize="852,1757.6" sap2010:WorkflowViewState.IdRef="If_13">
                                                            <sap:WorkflowViewStateService.ViewState>
                                                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                              </scg:Dictionary>
                                                            </sap:WorkflowViewStateService.ViewState>
                                                            <If.Then>
                                                              <Sequence sap:VirtualizedContainerService.HintSize="566.4,1552" sap2010:WorkflowViewState.IdRef="Sequence_178">
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <Sequence sap2010:Annotation.AnnotationText="必須チェック&#xD;&#xA;桁数チェック&#xD;&#xA;項目チェック" DisplayName="マッピングシートの内容でデータの転記 Body" sap:VirtualizedContainerService.HintSize="524.8,1459.2" sap2010:WorkflowViewState.IdRef="Sequence_138">
                                                                  <Sequence.Variables>
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する後の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する行の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する列の位置" />
                                                                  </Sequence.Variables>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <Assign sap2010:Annotation.AnnotationText="" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,91.2" sap2010:WorkflowViewState.IdRef="Assign_102">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する列の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row("登録列数値"))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先セルの取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_103">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する行の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row("登録列数値"))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先セルの取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_136">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する先の列の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row("登録先列"))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はそのままセルの値を挿入&#xA;input(登録する元の位置)(登録する元の位置).ToString" DisplayName="登録元データ Assign" sap:VirtualizedContainerService.HintSize="483.2,132.8" sap2010:WorkflowViewState.IdRef="Assign_104">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:String">[input(登録する行の位置)(登録する列の位置).ToString]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <WriteLine DisplayName="Write Line" sap:VirtualizedContainerService.HintSize="483.2,61.6" sap2010:WorkflowViewState.IdRef="WriteLine_4" Text="[&quot;登録する行の位置&quot;+登録する行の位置.ToString+&quot;登録する列の位置&quot;+登録する列の位置.ToString+&quot;登録する値は&quot;+登録する元のセル値]" />
                                                                  <Sequence DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="483.2,67.2" sap2010:WorkflowViewState.IdRef="Sequence_137">
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                    <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="613.6,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_7" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                                      <ui:FilterDataTable.Filters>
                                                                        <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                                          <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                            <ui:FilterOperationArgument.Column>
                                                                              <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                            </ui:FilterOperationArgument.Column>
                                                                            <ui:FilterOperationArgument.Operand>
                                                                              <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                            </ui:FilterOperationArgument.Operand>
                                                                          </ui:FilterOperationArgument>
                                                                        </scg:List>
                                                                      </ui:FilterDataTable.Filters>
                                                                      <ui:FilterDataTable.SelectColumns>
                                                                        <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                                          <x:Null />
                                                                        </scg:List>
                                                                      </ui:FilterDataTable.SelectColumns>
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                    </ui:FilterDataTable>
                                                                    <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="613.6,363.2" sap2010:WorkflowViewState.IdRef="If_10">
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                      <If.Then>
                                                                        <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="305.6,184" sap2010:WorkflowViewState.IdRef="Sequence_136">
                                                                          <sap:WorkflowViewStateService.ViewState>
                                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                            </scg:Dictionary>
                                                                          </sap:WorkflowViewStateService.ViewState>
                                                                          <Assign sap:VirtualizedContainerService.HintSize="264,60" sap2010:WorkflowViewState.IdRef="Assign_105">
                                                                            <Assign.To>
                                                                              <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                            </Assign.To>
                                                                            <Assign.Value>
                                                                              <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                            </Assign.Value>
                                                                          </Assign>
                                                                        </Sequence>
                                                                      </If.Then>
                                                                      <If.Else>
                                                                        <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_106">
                                                                          <Assign.To>
                                                                            <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                          </Assign.To>
                                                                          <Assign.Value>
                                                                            <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                          </Assign.Value>
                                                                          <sap:WorkflowViewStateService.ViewState>
                                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                            </scg:Dictionary>
                                                                          </sap:WorkflowViewStateService.ViewState>
                                                                        </Assign>
                                                                      </If.Else>
                                                                    </If>
                                                                  </Sequence>
                                                                  <If sap2010:Annotation.AnnotationText="マップデータの必須項目を確認して　必須であればチェックを行いログに出力をする" Condition="[Cint(row(&quot;必須&quot;))=1]" DisplayName="必須チェック If" sap:VirtualizedContainerService.HintSize="483.2,267.2" sap2010:WorkflowViewState.IdRef="If_21">
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                    <If.Then>
                                                                      <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_23" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                                        <ui:InvokeWorkflowFile.Arguments>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="登録日">[DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")]</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="ログ内容">["登録行"+コピー先のエクセルの行.ToString+"登録列"+登録する列の位置.ToString+"のデータは必須です"]</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="ログ詳細">Log</InArgument>
                                                                        </ui:InvokeWorkflowFile.Arguments>
                                                                      </ui:InvokeWorkflowFile>
                                                                    </If.Then>
                                                                  </If>
                                                                  <WriteLine DisplayName="Write Line" sap:VirtualizedContainerService.HintSize="483.2,61.6" sap2010:WorkflowViewState.IdRef="WriteLine_2" Text="[&quot;転記シートＩＤ&quot;+転記シートID.ToString+&quot; &quot;+登録する行の位置.ToString]" />
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="483.2,102.4" sap2010:WorkflowViewState.IdRef="Assign_107">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Object">[コピー先データ(Cint(転記シートID))(Cint(登録する列の位置))]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                </Sequence>
                                                              </Sequence>
                                                            </If.Then>
                                                            <If.Else>
                                                              <Sequence sap:VirtualizedContainerService.HintSize="241.6,294.4" sap2010:WorkflowViewState.IdRef="Sequence_180">
                                                                <sap:WorkflowViewStateService.ViewState>
                                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                  </scg:Dictionary>
                                                                </sap:WorkflowViewStateService.ViewState>
                                                                <Sequence DisplayName="更新登録" sap:VirtualizedContainerService.HintSize="200,67.2" sap2010:WorkflowViewState.IdRef="Sequence_174">
                                                                  <Sequence.Variables>
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する元の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する後の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する行の位置" />
                                                                    <Variable x:TypeArguments="x:Int32" Name="登録する列の位置" />
                                                                  </Sequence.Variables>
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録元列の取得&#xA;単票の場合はセルの価を設定" DisplayName="登録元列セルの位置データ Assign" sap:VirtualizedContainerService.HintSize="724.8,102.4" sap2010:WorkflowViewState.IdRef="Assign_122">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する元の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row(2))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="724.8,91.2" sap2010:WorkflowViewState.IdRef="Assign_123">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する列の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row(2))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先セルの取得&#xA;単票の場合はセルの価を設定" DisplayName="登録先セルの行位置データ Assign" sap:VirtualizedContainerService.HintSize="724.8,102.4" sap2010:WorkflowViewState.IdRef="Assign_124">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Int32">[登録する行の位置]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Int32">[Cint(row(3))-1]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先列の取得&#xA;単票の場合はそのままセルの値を挿入&#xA;input(登録する元の位置)(登録する元の位置).ToString" DisplayName="登録元データ Assign" sap:VirtualizedContainerService.HintSize="724.8,132.8" sap2010:WorkflowViewState.IdRef="Assign_125">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:String">[登録する元のセル値]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:String">[input(登録する行の位置)(登録する元の位置).ToString]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                  <WriteLine DisplayName="Write Line" sap:VirtualizedContainerService.HintSize="724.8,61.6" sap2010:WorkflowViewState.IdRef="WriteLine_5" Text="[&quot;登録する行の位置&quot;+登録する行の位置.ToString+&quot;登録する列の位置&quot;+登録する列の位置.ToString+&quot;登録する値は&quot;+登録する元のセル値]" />
                                                                  <Sequence DisplayName="文字変換処理　Sequence" sap:VirtualizedContainerService.HintSize="724.8,715.2" sap2010:WorkflowViewState.IdRef="Sequence_173">
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                    <ui:FilterDataTable sap2010:Annotation.AnnotationText="変換元から　変換先へのフィルター" DataTable="[変換テーブル]" DisplayName="文字比較 Filter Data Table" FilterRowsMode="Keep" sap:VirtualizedContainerService.HintSize="683.2,91.2" sap2010:WorkflowViewState.IdRef="FilterDataTable_9" OutputDataTable="[変換結果]" SelectColumnsMode="Keep">
                                                                      <ui:FilterDataTable.Filters>
                                                                        <scg:List x:TypeArguments="ui:FilterOperationArgument" Capacity="4">
                                                                          <ui:FilterOperationArgument BooleanOperator="And" Operator="EQ">
                                                                            <ui:FilterOperationArgument.Column>
                                                                              <InArgument x:TypeArguments="x:String">["Column0"]</InArgument>
                                                                            </ui:FilterOperationArgument.Column>
                                                                            <ui:FilterOperationArgument.Operand>
                                                                              <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                            </ui:FilterOperationArgument.Operand>
                                                                          </ui:FilterOperationArgument>
                                                                        </scg:List>
                                                                      </ui:FilterDataTable.Filters>
                                                                      <ui:FilterDataTable.SelectColumns>
                                                                        <scg:List x:TypeArguments="InArgument" Capacity="4">
                                                                          <x:Null />
                                                                        </scg:List>
                                                                      </ui:FilterDataTable.SelectColumns>
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                    </ui:FilterDataTable>
                                                                    <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="683.2,491.2" sap2010:WorkflowViewState.IdRef="If_12">
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                      <If.Then>
                                                                        <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="375.2,312" sap2010:WorkflowViewState.IdRef="Sequence_172">
                                                                          <sap:WorkflowViewStateService.ViewState>
                                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                              <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                              <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                            </scg:Dictionary>
                                                                          </sap:WorkflowViewStateService.ViewState>
                                                                          <Assign sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="Assign_126">
                                                                            <Assign.To>
                                                                              <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                            </Assign.To>
                                                                            <Assign.Value>
                                                                              <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                            </Assign.Value>
                                                                          </Assign>
                                                                          <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_11" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                                            <ui:InvokeWorkflowFile.Arguments>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="argsLogLevel">1</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="DSN2">Data Source=WFS1;Initial Catalog=ZMT_TEST;User ID=dev;Password=mtDev2317</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="DSN">Data Source=35.227.35.94;Initial Catalog=bpm;User ID=miyata;Password=1qaz2wsx3edc@@@</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="argsType">ALL</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="DSN3">Data Source=35.227.35.94;Initial Catalog=bpm;User ID=miyata;Password=1qaz2wsx3edc@@@</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="DSN4">Data Source=WFS1;Initial Catalog=ZMT_TEST;User ID=dev;Password=mtDev2317</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="IID">6756</InArgument>
                                                                              <InArgument x:TypeArguments="x:Int32" x:Key="Status">1</InArgument>
                                                                              <InArgument x:TypeArguments="s:Exception" x:Key="exception">[new System.Exception]</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="mode">0</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="ProcessName">process</InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="SECANSE">
                                                                                <Literal x:TypeArguments="x:String" Value="" />
                                                                              </InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="xaml">
                                                                                <Literal x:TypeArguments="x:String" Value="" />
                                                                              </InArgument>
                                                                              <InArgument x:TypeArguments="x:String" x:Key="ErrTxt">
                                                                                <Literal x:TypeArguments="x:String" Value="" />
                                                                              </InArgument>
                                                                            </ui:InvokeWorkflowFile.Arguments>
                                                                          </ui:InvokeWorkflowFile>
                                                                        </Sequence>
                                                                      </If.Then>
                                                                      <If.Else>
                                                                        <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_127">
                                                                          <Assign.To>
                                                                            <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                          </Assign.To>
                                                                          <Assign.Value>
                                                                            <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                          </Assign.Value>
                                                                          <sap:WorkflowViewStateService.ViewState>
                                                                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                              <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                            </scg:Dictionary>
                                                                          </sap:WorkflowViewStateService.ViewState>
                                                                        </Assign>
                                                                      </If.Else>
                                                                    </If>
                                                                  </Sequence>
                                                                  <WriteLine DisplayName="Write Line" sap:VirtualizedContainerService.HintSize="264,61.6" sap2010:WorkflowViewState.IdRef="WriteLine_6" Text="[転記シートID.ToString+&quot; &quot;+登録する行の位置.ToString]" />
                                                                  <Assign sap2010:Annotation.AnnotationText="登録先 copyDt(count-1)(Cint(B)-1)&#xA;登録元 rows(Cint(A)-1)" DisplayName="転記先レコードへ追加 Assign" sap:VirtualizedContainerService.HintSize="264,102.4" sap2010:WorkflowViewState.IdRef="Assign_128">
                                                                    <Assign.To>
                                                                      <OutArgument x:TypeArguments="x:Object">[コピー先データテーブル(Cint(転記シートID))(Cint(登録する列の位置))]</OutArgument>
                                                                    </Assign.To>
                                                                    <Assign.Value>
                                                                      <InArgument x:TypeArguments="x:Object">[登録データ]</InArgument>
                                                                    </Assign.Value>
                                                                    <sap:WorkflowViewStateService.ViewState>
                                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      </scg:Dictionary>
                                                                    </sap:WorkflowViewStateService.ViewState>
                                                                  </Assign>
                                                                </Sequence>
                                                                <If sap2010:Annotation.AnnotationText="検索にヒットした場合件数は０以上になる" Condition="[変換結果.Rows.Count &gt; 0]" DisplayName="検索にヒットした場合(If)" sap:VirtualizedContainerService.HintSize="200,94.4" sap2010:WorkflowViewState.IdRef="If_14">
                                                                  <sap:WorkflowViewStateService.ViewState>
                                                                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                      <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                      <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                                      <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                    </scg:Dictionary>
                                                                  </sap:WorkflowViewStateService.ViewState>
                                                                  <If.Then>
                                                                    <Sequence sap2010:Annotation.AnnotationText="登録データの設定" DisplayName="データを入れ替える Sequence" sap:VirtualizedContainerService.HintSize="375.2,312" sap2010:WorkflowViewState.IdRef="Sequence_179">
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                                          <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                      <Assign sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="Assign_129">
                                                                        <Assign.To>
                                                                          <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                        </Assign.To>
                                                                        <Assign.Value>
                                                                          <InArgument x:TypeArguments="x:String">[変換結果(0)(1).ToString]</InArgument>
                                                                        </Assign.Value>
                                                                      </Assign>
                                                                      <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_13" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                                                                        <ui:InvokeWorkflowFile.Arguments>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="argsLogLevel">1</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="DSN2">Data Source=WFS1;Initial Catalog=ZMT_TEST;User ID=dev;Password=mtDev2317</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="DSN">Data Source=35.227.35.94;Initial Catalog=bpm;User ID=miyata;Password=1qaz2wsx3edc@@@</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="argsType">ALL</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="DSN3">Data Source=35.227.35.94;Initial Catalog=bpm;User ID=miyata;Password=1qaz2wsx3edc@@@</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="DSN4">Data Source=WFS1;Initial Catalog=ZMT_TEST;User ID=dev;Password=mtDev2317</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="IID">6756</InArgument>
                                                                          <InArgument x:TypeArguments="x:Int32" x:Key="Status">1</InArgument>
                                                                          <InArgument x:TypeArguments="s:Exception" x:Key="exception">[new System.Exception]</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="mode">0</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="ProcessName">process</InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="SECANSE">
                                                                            <Literal x:TypeArguments="x:String" Value="" />
                                                                          </InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="xaml">
                                                                            <Literal x:TypeArguments="x:String" Value="" />
                                                                          </InArgument>
                                                                          <InArgument x:TypeArguments="x:String" x:Key="ErrTxt">
                                                                            <Literal x:TypeArguments="x:String" Value="" />
                                                                          </InArgument>
                                                                        </ui:InvokeWorkflowFile.Arguments>
                                                                      </ui:InvokeWorkflowFile>
                                                                    </Sequence>
                                                                  </If.Then>
                                                                  <If.Else>
                                                                    <Assign sap2010:Annotation.AnnotationText="登録データの設定" sap:VirtualizedContainerService.HintSize="264,91.2" sap2010:WorkflowViewState.IdRef="Assign_130">
                                                                      <Assign.To>
                                                                        <OutArgument x:TypeArguments="x:String">[登録データ]</OutArgument>
                                                                      </Assign.To>
                                                                      <Assign.Value>
                                                                        <InArgument x:TypeArguments="x:String">[登録する元のセル値]</InArgument>
                                                                      </Assign.Value>
                                                                      <sap:WorkflowViewStateService.ViewState>
                                                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                                          <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                                        </scg:Dictionary>
                                                                      </sap:WorkflowViewStateService.ViewState>
                                                                    </Assign>
                                                                  </If.Else>
                                                                </If>
                                                              </Sequence>
                                                            </If.Else>
                                                          </If>
                                                        </Sequence>
                                                      </ActivityAction>
                                                    </ui:ForEachRow.Body>
                                                    <sap:WorkflowViewStateService.ViewState>
                                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                        <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                      </scg:Dictionary>
                                                    </sap:WorkflowViewStateService.ViewState>
                                                  </ui:ForEachRow>
                                                </Sequence>
                                              </Sequence>
                                              <ui:OutputDataTable DataTable="[コピー先データテーブル]" DisplayName="Output Data Table" sap:VirtualizedContainerService.HintSize="1026.4,22.4" sap2010:WorkflowViewState.IdRef="OutputDataTable_5" Text="[ログ内容]" />
                                            </Sequence>
                                          </TryCatch.Try>
                                          <TryCatch.Catches>
                                            <Catch x:TypeArguments="s:Exception" sap:VirtualizedContainerService.HintSize="1071.2,21.6" sap2010:WorkflowViewState.IdRef="Catch`1_4">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">False</x:Boolean>
                                                  <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ActivityAction x:TypeArguments="s:Exception">
                                                <ActivityAction.Argument>
                                                  <DelegateInArgument x:TypeArguments="s:Exception" Name="exception" />
                                                </ActivityAction.Argument>
                                                <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_26" Text="[exception.ToString]" TopMost="True" />
                                              </ActivityAction>
                                            </Catch>
                                          </TryCatch.Catches>
                                        </TryCatch>
                                      </Sequence>
                                    </Sequence>
                                  </ActivityAction>
                                </ui:ForEach.Body>
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                              </ui:ForEach>
                              <ui:ExcelApplicationScope Password="{x:Null}" DisplayName="Excelに転記レコードをコピー出力をする Excel Application Scope" sap:VirtualizedContainerService.HintSize="1223.2,659.2" sap2010:WorkflowViewState.IdRef="ExcelApplicationScope_17" Visible="False" WorkbookPath="[出力ファイル]">
                                <ui:ExcelApplicationScope.Body>
                                  <ActivityAction x:TypeArguments="ui:WorkbookApplication">
                                    <ActivityAction.Argument>
                                      <DelegateInArgument x:TypeArguments="ui:WorkbookApplication" Name="ExcelWorkbookScope" />
                                    </ActivityAction.Argument>
                                    <Sequence sap:VirtualizedContainerService.HintSize="518.4,549.6" sap2010:WorkflowViewState.IdRef="Sequence_146">
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <Sequence DisplayName="データ転記の実行 Do" sap:VirtualizedContainerService.HintSize="476.8,456.8" sap2010:WorkflowViewState.IdRef="Sequence_145">
                                        <Sequence.Variables>
                                          <Variable x:TypeArguments="x:String" Name="res" />
                                        </Sequence.Variables>
                                        <sap:WorkflowViewStateService.ViewState>
                                          <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                            <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                          </scg:Dictionary>
                                        </sap:WorkflowViewStateService.ViewState>
                                        <ui:CommentOut DisplayName="Comment Out" sap:VirtualizedContainerService.HintSize="435.2,236" sap2010:WorkflowViewState.IdRef="CommentOut_79">
                                          <ui:CommentOut.Body>
                                            <Sequence DisplayName="Ignored Activities" sap:VirtualizedContainerService.HintSize="241.6,157.6" sap2010:WorkflowViewState.IdRef="Sequence_205">
                                              <sap:WorkflowViewStateService.ViewState>
                                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                                </scg:Dictionary>
                                              </sap:WorkflowViewStateService.ViewState>
                                              <ui:ExcelCopySheet sap2010:Annotation.AnnotationText="登録ミスの場合の為シートをコピーしておく" DestinationFilePath="[出力ファイル]" DestinationSheetName="[Now.ToString(“yyyyMMddhhmm”)+出力シート]" DisplayName="Copy Sheet" sap:VirtualizedContainerService.HintSize="200,64.8" sap2010:WorkflowViewState.IdRef="ExcelCopySheet_3" SheetName="[出力シート]">
                                                <sap:WorkflowViewStateService.ViewState>
                                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                                                  </scg:Dictionary>
                                                </sap:WorkflowViewStateService.ViewState>
                                              </ui:ExcelCopySheet>
                                            </Sequence>
                                          </ui:CommentOut.Body>
                                        </ui:CommentOut>
                                        <ui:ExcelWriteRange AddHeaders="False" DataTable="[コピー先データ]" DisplayName="Write Range" sap:VirtualizedContainerService.HintSize="435.2,88" sap2010:WorkflowViewState.IdRef="ExcelWriteRange_5" SheetName="[出力シート]" StartingCell="[出力シート位置]" />
                                      </Sequence>
                                    </Sequence>
                                  </ActivityAction>
                                </ui:ExcelApplicationScope.Body>
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                              </ui:ExcelApplicationScope>
                            </Sequence>
                            <FlowStep.Next>
                              <x:Reference>__ReferenceID0</x:Reference>
                            </FlowStep.Next>
                          </FlowStep>
                        </FlowSwitch>
                      </FlowDecision.True>
                      <FlowDecision.False>
                        <FlowStep x:Name="__ReferenceID10">
                          <sap:WorkflowViewStateService.ViewState>
                            <scg:Dictionary x:TypeArguments="x:String, x:Object">
                              <av:Point x:Key="ShapeLocation">600,726.4</av:Point>
                              <av:Size x:Key="ShapeSize">200,67.2</av:Size>
                              <av:PointCollection x:Key="ConnectorLocation">700,793.6 700,813.6</av:PointCollection>
                            </scg:Dictionary>
                          </sap:WorkflowViewStateService.ViewState>
                          <Sequence sap:VirtualizedContainerService.HintSize="200,67.2" sap2010:WorkflowViewState.IdRef="Sequence_184">
                            <sap:WorkflowViewStateService.ViewState>
                              <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                <x:Boolean x:Key="IsPinned">False</x:Boolean>
                              </scg:Dictionary>
                            </sap:WorkflowViewStateService.ViewState>
                            <ui:InvokeWorkflowFile ContinueOnError="{x:Null}" DisplayName="Invoke logManager workflow" sap:VirtualizedContainerService.HintSize="333.6,88" sap2010:WorkflowViewState.IdRef="InvokeWorkflowFile_14" UnSafe="False" WorkflowFileName="log\logManager.xaml">
                              <ui:InvokeWorkflowFile.Arguments>
                                <InArgument x:TypeArguments="x:String" x:Key="argsLogData">Log</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="argsLogLevel">1</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="argsType">ALL</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="IID">6756</InArgument>
                                <InArgument x:TypeArguments="x:Int32" x:Key="Status">1</InArgument>
                                <InArgument x:TypeArguments="s:Exception" x:Key="exception">[new System.Exception]</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="mode">0</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="ProcessName">process</InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="SECANSE">
                                  <Literal x:TypeArguments="x:String" Value="" />
                                </InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="xaml">
                                  <Literal x:TypeArguments="x:String" Value="" />
                                </InArgument>
                                <InArgument x:TypeArguments="x:String" x:Key="ErrTxt">
                                  <Literal x:TypeArguments="x:String" Value="" />
                                </InArgument>
                              </ui:InvokeWorkflowFile.Arguments>
                            </ui:InvokeWorkflowFile>
                          </Sequence>
                          <FlowStep.Next>
                            <FlowStep x:Name="__ReferenceID7">
                              <sap:WorkflowViewStateService.ViewState>
                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                  <av:Point x:Key="ShapeLocation">600,813.6</av:Point>
                                  <av:Size x:Key="ShapeSize">200,22.4</av:Size>
                                </scg:Dictionary>
                              </sap:WorkflowViewStateService.ViewState>
                              <TerminateWorkflow DisplayName="Terminate Workflow" sap:VirtualizedContainerService.HintSize="200,22.4" sap2010:WorkflowViewState.IdRef="TerminateWorkflow_1" Reason="ファイルが在りません">
                                <sap:WorkflowViewStateService.ViewState>
                                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                    <x:Boolean x:Key="IsPinned">False</x:Boolean>
                                  </scg:Dictionary>
                                </sap:WorkflowViewStateService.ViewState>
                              </TerminateWorkflow>
                            </FlowStep>
                          </FlowStep.Next>
                        </FlowStep>
                      </FlowDecision.False>
                    </FlowDecision>
                  </FlowStep.Next>
                </FlowStep>
              </FlowStep.Next>
            </FlowStep>
            <x:Reference>__ReferenceID1</x:Reference>
            <x:Reference>__ReferenceID0</x:Reference>
            <x:Reference>__ReferenceID2</x:Reference>
            <FlowStep x:Name="__ReferenceID11">
              <sap:WorkflowViewStateService.ViewState>
                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                  <av:Point x:Key="ShapeLocation">250,108.8</av:Point>
                  <av:Size x:Key="ShapeSize">200,64.8</av:Size>
                  <av:PointCollection x:Key="ConnectorLocation">350,173.6 350,196.4</av:PointCollection>
                </scg:Dictionary>
              </sap:WorkflowViewStateService.ViewState>
              <ui:GetSecureCredential sap2010:Annotation.AnnotationText="資格情報を取得して必要な場合に使用する" CredentialType="Generic" DisplayName="Get secure credential" sap:VirtualizedContainerService.HintSize="200,64.8" sap2010:WorkflowViewState.IdRef="GetSecureCredential_1" Password="[資格情報ユーザー]" PersistanceType="Enterprise" Target="USER" Username="[pass]">
                <sap:WorkflowViewStateService.ViewState>
                  <scg:Dictionary x:TypeArguments="x:String, x:Object">
                    <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                    <x:Boolean x:Key="IsAnnotationDocked">True</x:Boolean>
                  </scg:Dictionary>
                </sap:WorkflowViewStateService.ViewState>
              </ui:GetSecureCredential>
              <FlowStep.Next>
                <FlowStep x:Name="__ReferenceID5">
                  <sap:WorkflowViewStateService.ViewState>
                    <scg:Dictionary x:TypeArguments="x:String, x:Object">
                      <av:Point x:Key="ShapeLocation">250,196.4</av:Point>
                      <av:Size x:Key="ShapeSize">200,67.2</av:Size>
                      <av:PointCollection x:Key="ConnectorLocation">350,263.6 350,294.8</av:PointCollection>
                    </scg:Dictionary>
                  </sap:WorkflowViewStateService.ViewState>
                  <Sequence DisplayName="余計なプロセスの削除 Sequence" sap:VirtualizedContainerService.HintSize="200,67.2" sap2010:WorkflowViewState.IdRef="Sequence_113">
                    <sap:WorkflowViewStateService.ViewState>
                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        <x:Boolean x:Key="IsPinned">False</x:Boolean>
                      </scg:Dictionary>
                    </sap:WorkflowViewStateService.ViewState>
                    <Sequence DisplayName="processkillforusersample" sap:VirtualizedContainerService.HintSize="601.6,775.2" sap2010:WorkflowViewState.IdRef="Sequence_112">
                      <Sequence.Variables>
                        <Variable x:TypeArguments="sd1:Process[]" Name="process_list" />
                        <Variable x:TypeArguments="x:Boolean" Name="excel_process_found" />
                      </Sequence.Variables>
                      <sap:WorkflowViewStateService.ViewState>
                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                        </scg:Dictionary>
                      </sap:WorkflowViewStateService.ViewState>
                      <Assign sap:VirtualizedContainerService.HintSize="560,60" sap2010:WorkflowViewState.IdRef="Assign_82">
                        <Assign.To>
                          <OutArgument x:TypeArguments="sd1:Process[]">[process_list]</OutArgument>
                        </Assign.To>
                        <Assign.Value>
                          <InArgument x:TypeArguments="sd1:Process[]">[Process.GetProcesses]</InArgument>
                        </Assign.Value>
                      </Assign>
                      <ui:ForEach x:TypeArguments="sd1:Process" CurrentIndex="{x:Null}" DisplayName="For each" sap:VirtualizedContainerService.HintSize="560,582.4" sap2010:WorkflowViewState.IdRef="ForEach`1_1" Values="[process_list]">
                        <ui:ForEach.Body>
                          <ActivityAction x:TypeArguments="sd1:Process">
                            <ActivityAction.Argument>
                              <DelegateInArgument x:TypeArguments="sd1:Process" Name="item" />
                            </ActivityAction.Argument>
                            <Sequence DisplayName="Body" sap:VirtualizedContainerService.HintSize="524.8,448.8" sap2010:WorkflowViewState.IdRef="Sequence_111">
                              <Sequence.Variables>
                                <Variable x:TypeArguments="x:String" Name="process_user_sid" />
                                <Variable x:TypeArguments="x:String" Name="current_user" />
                                <Variable x:TypeArguments="x:Boolean" Name="sapExt" />
                              </Sequence.Variables>
                              <sap:WorkflowViewStateService.ViewState>
                                <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                  <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                </scg:Dictionary>
                              </sap:WorkflowViewStateService.ViewState>
                              <If Condition="[(item.ProcessName =&quot;EXCEL&quot;) or (item.ProcessName =&quot;cmd&quot;)]" sap:VirtualizedContainerService.HintSize="483.2,356" sap2010:WorkflowViewState.IdRef="If_8">
                                <If.Then>
                                  <Sequence sap:VirtualizedContainerService.HintSize="283.2,208" sap2010:WorkflowViewState.IdRef="Sequence_110">
                                    <sap:WorkflowViewStateService.ViewState>
                                      <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                        <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                      </scg:Dictionary>
                                    </sap:WorkflowViewStateService.ViewState>
                                    <Sequence sap:VirtualizedContainerService.HintSize="241.6,115.2" sap2010:WorkflowViewState.IdRef="Sequence_109">
                                      <sap:WorkflowViewStateService.ViewState>
                                        <scg:Dictionary x:TypeArguments="x:String, x:Object">
                                          <x:Boolean x:Key="IsExpanded">True</x:Boolean>
                                        </scg:Dictionary>
                                      </sap:WorkflowViewStateService.ViewState>
                                      <ui:KillProcess Process="{x:Null}" ContinueOnError="True" DisplayName="Kill process" sap:VirtualizedContainerService.HintSize="200,22.4" sap2010:WorkflowViewState.IdRef="KillProcess_1" ProcessName="[item.ProcessName]" />
                                    </Sequence>
                                  </Sequence>
                                </If.Then>
                              </If>
                            </Sequence>
                          </ActivityAction>
                        </ui:ForEach.Body>
                      </ui:ForEach>
                    </Sequence>
                  </Sequence>
                  <FlowStep.Next>
                    <x:Reference>__ReferenceID3</x:Reference>
                  </FlowStep.Next>
                </FlowStep>
              </FlowStep.Next>
            </FlowStep>
            <x:Reference>__ReferenceID4</x:Reference>
            <x:Reference>__ReferenceID5</x:Reference>
            <x:Reference>__ReferenceID6</x:Reference>
            <x:Reference>__ReferenceID7</x:Reference>
            <x:Reference>__ReferenceID8</x:Reference>
            <x:Reference>__ReferenceID9</x:Reference>
            <x:Reference>__ReferenceID10</x:Reference>
          </Flowchart>
        </Sequence>
      </TryCatch.Try>
      <TryCatch.Catches>
        <Catch x:TypeArguments="s:Exception" sap:VirtualizedContainerService.HintSize="1302.4,21.6" sap2010:WorkflowViewState.IdRef="Catch`1_1">
          <sap:WorkflowViewStateService.ViewState>
            <scg:Dictionary x:TypeArguments="x:String, x:Object">
              <x:Boolean x:Key="IsExpanded">False</x:Boolean>
              <x:Boolean x:Key="IsPinned">False</x:Boolean>
            </scg:Dictionary>
          </sap:WorkflowViewStateService.ViewState>
          <ActivityAction x:TypeArguments="s:Exception">
            <ActivityAction.Argument>
              <DelegateInArgument x:TypeArguments="s:Exception" Name="exception" />
            </ActivityAction.Argument>
            <ui:MessageBox Caption="{x:Null}" ChosenButton="{x:Null}" Buttons="Ok" DisplayName="Message Box" sap:VirtualizedContainerService.HintSize="333.6,60" sap2010:WorkflowViewState.IdRef="MessageBox_6" Text="[exception.ToString]" TopMost="True" />
          </ActivityAction>
        </Catch>
      </TryCatch.Catches>
    </TryCatch>
  </Sequence>
</Activity>