import Checkbox from 'expo-checkbox';
import { Dialog, Input } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Home() {
    const [habits, setHabits] = useState([]);
    const [addHabitDialog, setAddHabitDialog] = useState(false);
    const [habitName, setHabitName] = useState("");
    const addHabit = () => {
        // console.log(habitName)
        const newHabit = {
            name: habitName,
            checked: false
        }
        setHabits([...habits, newHabit]);
        setAddHabitDialog(false);
        setHabitName("");
    };
    return(
        <SafeAreaView className = "flex-1 flex-col bg-[#FFF8EA]">
            <Text className = "text-5xl font-bold self-start m-8">Habits</Text>
            <View className = "h-[18%] bg-[#FFFBF4] border-solid border border-[#4F3C3D] shadow-sm shadow-[#BAAB90] ml-4 mr-4 mb-4 rounded-lg">

            </View>
            <View className = "border border-dashed ml-4 mr-4 rounded-lg border-[#4F3C3D]">
                <Button title="Add a habit" color={"black"} onPress={() => {setAddHabitDialog(true)}}/>
            </View>
            <View className="m-6">
                {habits.length === 0 && <Text className="text-lg">No habits added yet</Text>}
                {habits.map((habit, index) => {return (
                    <View key={index} className = "flex flex-row items-center bg-[#FFF8EA] gap-x-5">
                        <Checkbox onValueChange={
                            (checked) => {
                                // console.log(checked);
                                setHabits(habits.map((habit, i) => {
                                    if (i === index) {
                                        habit.checked = checked;
                                    }
                                    return habit;
                                }));
                            }
                        }
                        value={
                            habit.checked
                        }/>
                        <Button className="text-lg ml-3" title={habit.name}/>
                    </View>
                )})}
            </View>
            <Dialog isVisible = {addHabitDialog}>
                <Dialog.Title title="Add a habit"/>
                <View className = "flex flex-col">
                    <TextInput placeholder = "Habit name" className = "border rounded-lg h-10 pl-5" onChangeText={newText => setHabitName(newText)} value={habitName}/>
                    <View className = "flex flex-row self-end">
                        <Dialog.Button title="Cancel" color={"black"} onPress={() => setAddHabitDialog(false)}/>
                        <Dialog.Button title="Add" color={"black"} onPress={() => {
                            addHabit();
                            }}/>
                    </View>
                </View>
            </Dialog>
        </SafeAreaView>
    )
}