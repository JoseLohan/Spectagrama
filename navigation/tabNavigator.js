import React from "react";
import Feed from "../screens/feed";
import CreatePost from "../screens/createPost";
import { CreateBottomNavigator } from "@react-navigation/bottom-tabs";

export default class TabNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name == "Feed") {
                            iconName = focused ? 'book' : 'book-outline'
                        } else if (route.name == "CreatePost") {
                            iconName = focused ? 'create' : 'create-outline'
                        }
                        return (
                            <Ionicons name={iconName} size={size} color={color}/>
                        )
                    }
                })}
                    activeColor = {"tomato"}
                    inactiveColor = {"grey"}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Create Story" component={CreatePost} />
            </Tab.Navigator>
        )
    }
}

    

