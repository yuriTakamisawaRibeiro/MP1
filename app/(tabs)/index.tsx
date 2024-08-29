import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { DateTimePickerEvent, } from '@react-native-community/datetimepicker';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function HomeScreen() {

  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    } else {
      toggleDatePicker();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Calculadora de idade</Text>

        <Text style={styles.p}>Este cálculo é muito usado em clínicas médicas para ajudar os médicos a fazer os diagnósticos nos pacientes</Text>

        <View style={styles.view}>
          <Text style={styles.h2}>Data de nascimento</Text>

          {showPicker && (
            <DateTimePicker
              mode='date'
              display='spinner'
              value={date}
              onChange={onChange}
            />
          )}

          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={styles.datePicker}
                placeholder='Escolha sua data de nascimento'
                placeholderTextColor='#11182744'
                editable={false}
              />
            </Pressable>
          )}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15
  },
  view: {
    gap: 15
  },
  h2: {
    fontSize: 18,
    paddingTop: 20,
    fontWeight: '600'
  },
  p: {
    fontSize: 15,
    fontWeight: '300',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    textAlign: 'justify'
  },
  button: {
    backgroundColor: '#075985',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    margin: 'auto',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  datePicker: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16
  }
});
