import { SafeAreaView, Text } from "react-native";
import { Icon } from "react-native-elements";

export default function Menu({navigation}){
    return (
        <SafeAreaView className = "flex-1 bg-[#FFFBF4] items-center">
            <Text className = "font-bold text-4xl m-4">Menu</Text>
            <Icon name="cancel" type="material" size={35} color="#4F3C3D" className="self-start m-8" onPress={() => {navigation.pop()}}/>
        </SafeAreaView>
    )
}