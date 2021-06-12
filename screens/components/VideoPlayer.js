import React,{useState} from 'react';

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';
import LoadingView from '../LoadingView';
const VideoPlayer=({navigation, route})=>{
  
  const { links } = route.params;
    return (
      <View style={{flex: 1}}>
        
          <Video source={{uri:links}}
                  shouldPlay={false}
                  // onLoadStart={() => {
                  //   setLoading(true);
                  // }}
                  // onLoad={() => {
                  //   setLoading(false);
                  // }}
                  repeat={true}
                  controls={true}
                  resizeMode="contain"
                  style={styles.mediaPlayer} 
                  />
      
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height/3
    
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});
export default VideoPlayer;

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   ImageBackground,
//   Modal,
// } from 'react-native';
// import Video from 'react-native-video';

// import Icon from 'react-native-vector-icons/Ionicons';

// const windowWidth = Dimensions.get('window').width;
// import LoadingView from '../LoadingView';

// const VideoPlayer =({navigation, route})=> {
//   const { links } = route.params;

//   const [loading, setLoading] = useState(true);
//   const [isVisible, setVisible] = useState(null);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: "black",
//         paddingTop: StatusBar.currentHeight,
//         alignContent: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <ScrollView>
//         <ImageBackground
//           source={{
//             uri: "thumbnail",
//           }}
//           style={{
//             height: 300,
//             width: windowWidth,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               setVisible(links);
//             }}>
//             <View style={styles.playButton}>
//               <Icon
//                 name="play"
//                 style={{marginLeft: 3}}
//                 color="white"
//                 size={30}
//               />
//             </View>
//           </TouchableOpacity>
//         </ImageBackground>
//         <Modal
//           style={{}}
//           animationType="slide"
//           transparent={false}
//           visible={isVisible !== null}
//           onRequestClose={() => {
//             setVisible(null);
//           }}>
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: '#000000',
//             }}>
//             <View>
//               {loading && <LoadingView />}
//               <Video
//                 source={isVisible !== null ? {uri: links} : null}
//                 onLoadStart={() => {
//                   setLoading(true);
//                 }}
//                 onLoad={() => {
//                   setLoading(false);
//                 }}
//                 resizeMode="contain"
//                 style={{
//                   aspectRatio: 0.8,
//                   // position: 'absolute',
//                   // top: 0,
//                   // right: 0,
//                   // bottom: 0,
//                   // left: 0,
//                   borderRadius: 7,
//                 }}
//                 controls={true}
//               />
//             </View>
//           </View>
//         </Modal>

//         <View>
//           <Text
//             style={{
//               color: "white",
//               fontWeight: 'bold',
//               fontSize: 25,
//               padding: 5,
//             }}>
//             {"name"}
//           </Text>
//           <Text style={{color: "white", padding: 7}}>{"description"}</Text>
//           <Text style={{color: "white", padding: 7, fontSize: 10}}>
//             Starring: {"cast"}
//           </Text>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             marginHorizontal: 10,
//             marginVertical: 10,
//           }}>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginHorizontal: 15,
//             }}>
//             <Icon
//               name="add"
//               style={{paddingHorizontal: 8}}
//               size={20}
//               color="white"
//             />
//             <Text style={{color: "white"}}>My List</Text>
//           </View>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginHorizontal: 15,
//             }}>
//             <Icon
//               name="thumbs-up-outline"
//               style={{paddingHorizontal: 8}}
//               size={20}
//               color="white"
//             />
//             <Text style={{color: "white"}}>Rate</Text>
//           </View>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginHorizontal: 15,
//             }}>
//             <Icon
//               name="ios-share-social"
//               style={{paddingHorizontal: 8}}
//               size={20}
//               color="white"
//             />
//             <Text>Share</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   playButton: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'white',
//     backgroundColor: 'rgba(43, 38, 39, 0.68)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default VideoPlayer;