/* modelo de prepare */
const inputTypes = [
  "Text",
  "TextArea",
  "Radiogroug","Radio",
  "Checkbox",
  "Select",
]

const model =
[
  {
    fieldType:"Text",
    fieldLabel:"First name",
    fieldName:"firstName",
    id:"firstName",
    type:""
  },
  {
    fieldType: "Dynamic",
    fieldLabel: "PESSOA",
    fieldName: "pessoas",
    fieldTemplate: "NestedField",
    fields: [
      {
        fieldType: "Text",
        fieldLabel: "Nome",
        fieldName: "nome",
        id: "nome"
      },
      {
        fieldType: "Text",
        fieldLabel: "Sobrenome",
        fieldName: "sobrenome",
        id: "sobrenome"
      }
    ]
  },
  {
    fieldType:"Text",
    fieldLabel:"Last name",
    fieldName:"lastName",
    id:"lastName"
  },
  {
    fieldType:"RadioGroup",
    fieldName:"gender",
    id:"gender",
    options: [
      {
        label:"Male",
        value:"male"
      },
      {
        label:"Female",
        value:"female"
      }
    ]
  },
  {
    fieldType:"TextArea",
    fieldLabel:"Bio",
    fieldName:"bio",
    id:"bio",
  },
  {
    fieldType:"CheckGroup",
    fieldLabel:"Grupo de checks",
    fieldName:"authorize",
    id:"authorize",
    options: [
      {
        fieldName:"authorize1",
        fieldLabel:"Authorize 1",
        id:"authorize1"
      },
      {
        fieldName:"authorize2",
        fieldLabel:"Authorize 2",
        id:"authorize2"
      },
    ]
  },
  {
    fieldType:"Select",
    fieldLabel:"Relationship status",
    fieldName:"status",
    id:"status",
    options: [
      {
        label:'Single',
        value:'single',
      },
      {
        label:'In a Relationship',
        value:'relationship',
      },
      {
        label:"It's Complicated",
        value:'complicated',
      }
    ]
  },
  {
    fieldType: "NestedField",
    fieldLabel: "Um nested field",
    fieldName: "nested",
    fields: [
      {
        fieldType: "Text",
        fieldLabel: "Primeiro input do nested",
        fieldName: "input1",
        id: "input1"
      }
    ]
  }
]

export default model;
