import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import database from '@react-native-firebase/database';
const Home = ({ navigation }) => {

  const [kidsList, setKidsList] = useState([]);
  function getKidsList() {
    database()
      .ref('/Categories/Kids/')
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
        setKidsList(sortArrayAsc(main));
      });
  }
  function sortArrayAsc(array) {
    return array.sort(function (a, b) {
      console.info(b.viewCount);
      return b.viewCount < a.viewCount ? -1 : b.viewCount > a.viewCount ? 1 : 0;
    });
  }

  const [hollywoodList, setHollywoodList] = useState([]);
  function getHollywoodList() {
    database()
      .ref('/Categories/Hollywood/')
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
        setHollywoodList(sortArrayAsc(main));
      });
  }
  function sortArrayAsc(array) {
    return array.sort(function (a, b) {
      console.info(b.viewCount);
      return b.viewCount < a.viewCount ? -1 : b.viewCount > a.viewCount ? 1 : 0;
    });
  }

  const [bollywoodList, setBollywoodList] = useState([]);
  function getBollywoodList() {
    database()
      .ref('/Categories/Bollywood/')
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
        setBollywoodList(sortArrayAsc(main));
      });
  }
  function sortArrayAsc(array) {
    return array.sort(function (a, b) {
      console.info(b.viewCount);
      return b.viewCount < a.viewCount ? -1 : b.viewCount > a.viewCount ? 1 : 0;
    });
  }

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
  function sortArrayAsc(array) {
    return array.sort(function (a, b) {
      console.info(b.viewCount);
      return b.viewCount < a.viewCount ? -1 : b.viewCount > a.viewCount ? 1 : 0;
    });
  }

  const [TrendingList, setTrendingList] = useState([]);
  function getTrendingList() {
    database()
      .ref('/Categories/Trending/')
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
        setTrendingList(sortArrayAsc(main));
      });
  }
  function sortArrayAsc(array) {
    return array.sort(function (a, b) {
      console.info(b.viewCount);
      return b.viewCount < a.viewCount ? -1 : b.viewCount > a.viewCount ? 1 : 0;
    });
  }
  useEffect(() => {
    getTrendingList();
    getSeriesList();
    getKidsList();
    getBollywoodList();
    getHollywoodList();
  }, []);

  const [background, setBackground] = useState({
    uri: 'https://1.bp.blogspot.com/-f4ojyVI2czc/YJE7FkeMOJI/AAAAAAAAVUk/Cj2GgPyH2moruGeGCLr2j_N2aHi-cuPCwCLcBGAsYHQ/s640/the-family-man-2-Web%2BSeries.jpg',
    name: 'The Family Man',
    stat: '2019 ‧ Action, Comedy, Drama ‧ 2 Seasons',
    desc: 'A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.',
    link: "https://bot1.telegramfiles.ga/9950290890925744/bollywebholly.mkv"
  })

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window')

  const routeRecents = () => {
    props.navigation.navigate('Recents')
  }
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              link: item.link,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            })
          }
          }
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
        </TouchableOpacity>

      </View>

    )
  }


  return (
    <ScrollView style={{ backgroundColor: '#000' }} blurRadius={100}>

      <StatusBar backgroundColor='#000' barStyle='light-content' />

      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: background.uri }} style={styles.ImageBg} blurRadius={10}>
            <View style={styles.SearchboxContainer}>
              <TextInput
                placeholder='Search Movies'
                placeholderTextColor='#666'
                style={styles.Searchbox}
              >
              </TextInput>
              <Feather name='search' size={22} color='#666' style={styles.SearchboxIcon} />
            </View>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Popular on Netflix</Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.carousel}
                data={TrendingList}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              //pagingEnable={false}
              //minScrollDistance={20}
              />
            </View>


            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity onPress={() => {
                navigation.navigate('VideoPlayer', {
                  links: background.link,
                });
              }} style={styles.playIconContainer}>
                <FontAwesome5 name='play' size={22} color='red' style={{ marginLeft: 4 }} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* CONTINUE WATCHING START*/}

      <View style={{ marginHorizontal: 14 }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Continue Watching</Text>
        <ImageBackground
          style={{ height: 250, width: '100%', backgroundColor: '000' }}
          resizeMode='cover'
          source={{
            uri: 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon'
          }}
        >

          <Text style={{ color: 'white', padding: 14 }}>How to Train Your Dragon: The Hidden World</Text>

          <TouchableOpacity onPress={() => {
                navigation.navigate('Info', {
                  links: "link",
                });}} style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}>
            <FontAwesome5 name='play' size={22} color='red' style={{ marginLeft: 4 }} />
          </TouchableOpacity>
          <View style={{ height: 4, backgroundColor: '#666', position: 'absolute', bottom: 0, width: '100%' }}></View>
          <View style={{ height: 4, borderRadius: 10, backgroundColor: 'red', position: 'absolute', bottom: 0, width: '40%' }}></View>
        </ImageBackground>
      {/* CONTINUE WATCHING END*/}

      {/* SERIES START*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>Top Series</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={seriesList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }} />
                <View style={{ position: "absolute", height: 5, width: '100%', backgroundColor: 'red', opacity: 0.8 }}></View>
                <FontAwesome5 name='play' size={38} color='#fff' style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* SERIES END*/}

        {/* BOLLYWOOD START*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>Bollywood</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={bollywoodList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }} />
                <View style={{ position: "absolute", height: 5, width: '100%', backgroundColor: 'red', opacity: 0.8 }}></View>
                <FontAwesome5 name='play' size={38} color='#fff' style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* BOLLYWOOD END*/}
        {/* HOLLYWOOD START*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>Hollywood</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={hollywoodList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }} />
                <View style={{ position: "absolute", height: 5, width: '100%', backgroundColor: 'red', opacity: 0.8 }}></View>
                <FontAwesome5 name='play' size={38} color='#fff' style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* HOLLYWOOD END*/}
        {/* KIDS START*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>Kids</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={kidsList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }} />
                <View style={{ position: "absolute", height: 5, width: '100%', backgroundColor: 'red', opacity: 0.8 }}></View>
                <FontAwesome5 name='play' size={38} color='#fff' style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* KIDS END*/}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // CAROUSEL STYLES

  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
    paddingLeft: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
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

export default Home;