import { Text, View,  TouchableOpacity, ImageBackground,StyleSheet,FlatList,Image } from 'react-native';
import React ,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Info = () => {
    const [seriesList, setSeriesList] = useState([]);
    function getSeriesList() {
        database()
        .ref('/Categories/Series/')
        .on('value', (snapshot) => {
            var main = [];
            snapshot.forEach((child) => {
            main.push({
                desc: child.val().desc,
                image: child.val().image,
                key: child.val().key,
                link: child.val().link,
                released: child.val().released,
                title: child.val().title,
                viewCount: child.val().viewCount,
            });
            });
            setSeriesList(sortArrayAsc(main));
        });
    }
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          image : 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon',
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          image : 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon',
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          image : 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon',
        },
      ];
      const renderSeprator = () => (
          <View
          style={{
            marginTop:20,
            height:0.5,
          }}
          />
        );
    return(
        <View style={{flex:1,backgroundColor:"#252525"}}>
        <View style={{ marginHorizontal: 14, marginTop:40 }}>
           
            <ImageBackground
            style={{ height: 250, width: '100%', backgroundColor: '000' }}
            resizeMode='cover'
            source={{
                uri: 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon'
            }}
            >
            <TouchableOpacity style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}>
                <FontAwesome5 name='play' size={22} color='red' style={{ marginLeft: 4 }} />
            </TouchableOpacity>
            <View style={{ height: 4, backgroundColor: '#666', position: 'absolute', bottom: 0, width: '100%' }}></View>
            <View style={{ height: 4, borderRadius: 10, backgroundColor: 'red', position: 'absolute', bottom: 0, width: '40%' }}></View>
            </ImageBackground>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={DATA}
          renderItem={({ item }) => {
            return (
            <View style={styles.flatListView}>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image}} style={{ height: 100, width: 150}} />
                
              </TouchableOpacity>
            </View>
            )
          }}
          ItemSeparatorComponent={renderSeprator}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );

}
const styles = StyleSheet.create({
flatListView:{
    backgroundColor:'black',
    paddingTop:20,
    paddingBottom:20
},
playIconContainer: {
  backgroundColor: '#212121',
  padding: 18,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 25,
  borderWidth: 4,
  borderColor: 'rgba(2, 173, 148, 0.2)',
  marginBottom: 14
}
});

export default Info;