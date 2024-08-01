import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Filter = () => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
            <TouchableOpacity>
                <Text style={styles.cancelText}>Clear All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View>
            <View style={styles.radioGroup}>
                <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                />
                <Text style={styles.radioLabel}>First Option</Text>
            </View>
            <View style={styles.radioGroup}>
                <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                />
                <Text style={styles.radioLabel}>Second Option</Text>
            </View>
            <View style={styles.radioGroup}>
                <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
                />
                <Text style={styles.radioLabel}>Third Option</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:50,
        marginHorizontal: 15
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    cancelText:{
        color: '#ce1694',
        fontSize: 16,
        fontWeight: 'bold'
    },
    filterText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
});  

export default Filter;