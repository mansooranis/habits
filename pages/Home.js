import { Button, SafeAreaView, Text, View } from "react-native";

export default function Home() {
    return(
        <SafeAreaView className = "flex-1 flex-col bg-[#FFF8EA]">
            <Text className = "text-5xl font-bold self-start m-8">Habits</Text>
            <View className = "border border-dashed ml-4 mr-4 rounded-lg border-[#4F3C3D]">
                <Button title="Add a habit" className = " w-7 border"/>
            </View>
            <View className = "flex-1 flex-col justify-center items-center">
                <Text className = "">Home</Text>
            </View>
        </SafeAreaView>
    )
}