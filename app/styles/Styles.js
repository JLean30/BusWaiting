import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:"#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent:'center',
        width: '100%',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },

    containerCenter:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom:{
        backgroundColor: '#007EA9',
        width: '50%',
        borderRadius: 5,
       
      
        
    },
    buttomText:{
        textAlign:'center',
        color: '#fff',
        fontWeight:'bold',
        fontSize: 15,
        padding:10

    }
})