import React from "react";
import { View, Text, TouchableOpacity, Keyboard, Button, Image, Modal, TextInput, FlatList } from "react-native";
import {
    IMAGES,
    COLORS,
    TYPE,
} from "../../constants";
import { dynamicSize } from "../../utils/responsive";

import { styles } from "./Style";
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
const OrderStatusContent = ({

    onsearchFilterFunction,
    onClear,
    textValue,
    data,
    ListArray,
    renderItem,
    ExitModel,
    isModal,
    addData,
    title,
    _handleFocus,
    _handleBlur,
    _onChangeTextTitle,
    _onChangeTextrestroTitle,
    date,
    openPicker,
    openDate,
    onComfirm,
    onCancel,
    selectedDate,
    maximumDate,
    show,
    mode,
    onChange,
    restrotitle,
    submitData,


}) => {

    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={addData} style={styles.addbutton}><Text style={styles.addtext}>Add</Text></TouchableOpacity>
            <View style={styles.searchBox}>
                <View style={styles.searchSection}>
                    <View style={{ marginLeft: dynamicSize(20) }}>
                        <Image
                            source={IMAGES.searchIcon}
                            style={styles.searchIcon}
                            resizeMode={TYPE.CONTAIN}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.searchtext}
                            placeholder="Search"
                            value={textValue}
                            placeholderTextColor={'black'}
                            onChangeText={onsearchFilterFunction}
                        />
                    </View>
                    {textValue !== "" && (
                        <TouchableOpacity
                            onPress={onClear}
                            style={{ marginLeft: dynamicSize(20) }}
                        >
                            <Image
                                source={IMAGES.CROSS}
                                style={styles.crossIcon}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <FlatList
                data={ListArray}
                renderItem={item => renderItem(item)}
                keyExtractor={index => index.toString()}
                scrollEnabled={false}
            />
            <Modal animationType={"slide"} transparent={true} visible={isModal}
                onRequestClose={() => { }}>
                <TouchableOpacity
                    style={{
                        flex: 1, backgroundColor: COLORS.RGB_0_0_0_51, justifyContent: 'center', alignItems: 'center',
                    }}>
                </TouchableOpacity>
                <View style={styles.modal}>
                    <View style={{ flex: 1, borderRadius: 5, paddingHorizontal: 10, width: ('85%'), backgroundColor: '#fff' }}>
                        <View style={{ flex: 0 }}>
                            <View style={{}}>
                                <View style={{ height: dynamicSize(40), marginTop: dynamicSize(20), backgroundColor: '#FFF', borderRadius: 8 }}>
                                    <TextInput
                                        value={title}
                                        style={styles.textInput}
                                        underlineColorAndroid='#4169E1'
                                        onFocus={_handleFocus}
                                        onBlur={_handleBlur}
                                        onChangeText={_onChangeTextTitle}
                                        keyboardType={'default'}
                                        secureTextEntry={false}
                                        placeholder={'Enter Title'}
                                        placeholderTextColor={'black'}
                                    />
                                </View>
                                <View style={{
                                    height: dynamicSize(40),
                                    marginTop: dynamicSize(20),
                                    backgroundColor: '#FFF',
                                    borderRadius: 8

                                }}>
                                    <TextInput
                                        value={restrotitle}
                                        style={styles.textInput}
                                        underlineColorAndroid='#4169E1'
                                        onFocus={_handleFocus}
                                        onBlur={_handleBlur}
                                        onChangeText={_onChangeTextrestroTitle}
                                        keyboardType={'default'}
                                        secureTextEntry={false}
                                        placeholder={'Enter Restro Title'}
                                        placeholderTextColor={'black'}
                                    />
                                </View>
                                <View><Text>{selectedDate}</Text></View>
                                <View>
                                    <TouchableOpacity style={styles.pickerTitlebox} onPress={openDate}><Text style={styles.pickertitle}>Pick date</Text></TouchableOpacity>
                                    <View><TouchableOpacity onPress={submitData} style={styles.submitbtn}><Text style={[styles.addtext, { color: 'white', marginTop: 0 }]}>Submit</Text></TouchableOpacity></View>

                                    <DatePicker
                                        modal
                                        mode="datetime"
                                        open={openPicker}
                                        date={date}
                                        onConfirm={onComfirm}
                                        onCancel={onCancel}
                                        minimumDate={date}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={ExitModel}
                    style={{
                        flex: 1, backgroundColor: COLORS.RGB_0_0_0_51, justifyContent: 'center', alignItems: 'center',
                    }}>
                </TouchableOpacity>
            </Modal>

        </View>
    )
}
export default React.memo(OrderStatusContent);
