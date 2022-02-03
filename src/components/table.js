function Table(){
   return <table>

       <tr>
           <td>Name</td>
           <td>Class</td>
       </tr>
       <tr>
           <td>Subhan</td>
           <td>XII</td>
       </tr>
       <tr>
           <td>Sufyan</td>
           <td>VI</td>
       </tr>
       <Tr obj = {{
           Name : "Zain",
           Class : "II"
       }}/>
   </table>
}
function Tr(prop){
  return <tr>
      <td>{prop.obj.Name}</td>
      <td>{prop.obj.Class}</td>
  </tr>
}
export default Table