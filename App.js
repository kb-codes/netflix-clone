import React from "react"; 
import Navigation from "./screens/Navigation";

export default function App() {

  // const [test, setTest] = useState("");
 
  // function setFunction()
  // {
  //   database()
  //   .ref('/Main')
  //   .set({
  //     name: "kbcodes",
  //   })
  //   .then(() => console.log('Data set.'));
  // }
  // function updateFunction()
  // {
  //   database()
  //   .ref('/Main')
  //   .update({
  //     name: "kbcodes.io",
  //   })
  //   .then(() => console.log('Data updated.'));
  // }
  // async function removeFunction()
  // {
  //   await database().ref('/Main/name').remove();
  // }
  // const [value, setValue] = useState([]); 
  // function readFunction(){
  //   database()  
  //   .ref('/Main')
  //   .on('value',snapshot =>{
  //     var main = [];
  //     snapshot.forEach((child)=>{
  //       console.log(child.val());
  //       main.push({
  //         key:child.val(),
  //       })
  //     })
  //     // console.log("User Data:",snapshot.val());
  //     // setTest(snapshot.val());
  //     setValue(main);
  //   });
  // }
  
  // useEffect(()=>{
  //   readFunction()
  // },[]);

  // const renderItem = ({item}) =>(
  //   <View style={{height:80,width:300,padding:20,alignItems:'center',justifyContent: 'center',borderColor:"#ffd75e", borderWidth:2}}>
  //     <Text style ={{color:'white'}}>
  //       {item.key}
  //     </Text>
  //   </View>
  // );
  // const renderSeprator = () => (
  //   <View
  //   style={{
  //     marginTop:20,
  //     height:0.5,
  //   }}
  //   />
  // );
  return (
    <Navigation/>
    // <View style={{flex: 1,backgroundColor:"#252525", justifyContent: 'center',alignItems: 'center',alignContent:'center'}}>
    //   <FlatList
    //   style={{marginTop:100}}
    //   data={value}
    //   renderItem={renderItem}
    //   keyExtractor={(item)=>item.key}
    //   ItemSeparatorComponent={renderSeprator}
    //   />
      // <Text>Test Value = {test}</Text>
      // <Button onPress={()=>setFunction()} title="Set name to kbcodes"/>
      // <Button onPress={()=>updateFunction()} title="Update name to kbcodes.io"/>
      // <Button onPress={()=>removeFunction()} title="Remove new from Main"/> 
    // </View>
  );
}
