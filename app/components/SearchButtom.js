import React from "react";
import { 
    View,
    Text,
    TouchableOpacity

} from "react-native";
import Styles from "../styles/Styles";


export default function SearchButton (props) {

        return (
            <TouchableOpacity style={Styles.buttom}
            onPress={() => props.onPress()}>
                <Text style={Styles.buttomText}>
                {props.title}</Text>
                
            </TouchableOpacity>
        );
    }
