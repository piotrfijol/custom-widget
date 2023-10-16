(function() {

  widgetName = "excelwidget";

  let tmpl = document.createElement('template');
  tmpl.innerHTML = `
    <style>
    </style>
  `;

  div = document.createElement('div');
  div.slot = "content_" + widgetName;

    let div0 = document.createElement('div');
    div0.innerHTML = '<?xml version="1.0"?><script id="oView_' + widgetName + '" name="oView_' + widgetName + '" type="sapui5/xmlview"><mvc:View height="100%" xmlns="sap.m" xmlns:u="sap.ui.unified" xmlns:f="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" controllerName="myView.Template"><f:SimpleForm editable="true"><f:content><Label text="Upload"></Label><VBox><u:FileUploader id="idfileUploader" width="100%" useMultipart="false" sendXHR="true" sameFilenameAllowed="true" buttonText="" fileType="XLSM" placeholder="" style="Emphasized" change="onValidate"></u:FileUploader></VBox></f:content></f:SimpleForm></mvc:View></script>';
    _shadowRoot.appendChild(div0);

    let div1 = document.createElement('div');
    div1.innerHTML = '<?xml version="1.0"?><script id="myXMLFragment_' + widgetName + '" type="sapui5/fragment"><core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><SelectDialog title="Partner Number" class="sapUiPopupWithPadding"  items="{' + widgetName + '>/}" search="_handleValueHelpSearch"  confirm="_handleValueHelpClose"  cancel="_handleValueHelpClose"  multiSelect="true" showClearButton="true" rememberSelections="true"><StandardListItem icon="{' + widgetName + '>ProductPicUrl}" iconDensityAware="false" iconInset="false" title="{' + widgetName + '>partner}" description="{' + widgetName + '>partner}" /></SelectDialog></core:FragmentDefinition></script>';
    _shadowRoot.appendChild(div1);

    let div2 = document.createElement('div');
    div2.innerHTML = '<div id="ui5_content_' + widgetName + '" name="ui5_content_' + widgetName + '"><slot name="content_' + widgetName + '"></slot></div>';
    _shadowRoot.appendChild(div2);

    this.appendChild(div);

    customElements.define('excelwidget', class ExcelWidget extends HTMLElement {
      constructor () {
        super();
        let shadowRoot - this.attachShadow({mode: "open"});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
      }
    });
  )();
