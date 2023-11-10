import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {toggleState} from '@rtk/slices/drawerSlice';
import {COLORS} from '@constants/colorConstants';
import {RootNavigation} from '@services/RootNavigation';
import {SCREENS} from '@constants/screenConstants';
import {Plus,Sliders} from 'react-native-feather';

const MainScreen = () => {
  const dispatch = useDispatch();

  const onPressToNavigate = () => {
    RootNavigation.navigate(SCREENS.DETAILS_SCREEN, {});
  };

  const SearchBar = () => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: COLORS.WHITE,
          paddingHorizontal: 13,
          paddingVertical:9,
          borderRadius: 4,
          flexDirection:'row',
          alignItems:'center'
        }}>
        <TextInput placeholder='Search' style={{padding:0}}/>
        <TouchableOpacity style={{marginLeft:'auto'}}>
        <Sliders stroke={COLORS.BLACK} width={18} height={18} />
            </TouchableOpacity>
      </View>
    );
  };

  const CardItem = ({item}) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: COLORS.WHITE,
          padding: 13,
          borderRadius: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: COLORS.DARK_ORANGE,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '700', color: COLORS.WHITE}}>
                T
              </Text>
            </View>
          </View>

          <View style={{marginHorizontal: 10, flex: 8}}>
            <Text>Have to test NEST</Text>
          </View>
          <View style={{marginLeft: 'auto', flex: 3, alignItems: 'flex-end'}}>
            <Text style={{lineHeight: 14, fontSize: 14}}>2023:11:11</Text>
            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 1,
                backgroundColor: COLORS.MATTE_RED,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: COLORS.WHITE}}>Note</Text>
            </View>
          </View>
        </View>
        <View>
          <Text numberOfLines={3} ellipsizeMode={'tail'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit
            amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={onPressToNavigate}
            style={{
              backgroundColor: COLORS.BLACK,
              borderRadius: 4,
              padding: 10,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.WHITE}}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => <CardItem {...{item}} key={index} />;

  const RenderList = () => {
    return (
      <View>
        <FlatList data={[1, 2, 4, 1, 2, 4, 1, 2, 4]} renderItem={renderItem} ListFooterComponent={<View style={{height:100}}/>}/>
      </View>
    );
  };

  const FloatingActionButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.DARK_ORANGE,
          width: 55,
          height: 55,
          borderRadius: 100,
          position: 'absolute',
          right: 10,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Plus stroke={COLORS.BLACK} width={20} height={20} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.GRAY, flex: 1}}>
      <SearchBar />
      <RenderList />
      <FloatingActionButton />
    </SafeAreaView>
  );
};

export default MainScreen;
