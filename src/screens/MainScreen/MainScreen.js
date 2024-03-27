import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'

const MainScreen = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['allLocations'],
        queryFn: async () => {
            const response = await fetch('http://10.0.2.2:8000/api/locations')
            const data = await response.json()
            console.log(data)
            return data
        }
    })
    // create a loader compoennt (a lot of exmaples from the internet)
    // if(isLoading) return <Loader/>

    // create a component that shows the indication of the error and let u go back
    // if(error) return <Error/>

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
        </View>)
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})