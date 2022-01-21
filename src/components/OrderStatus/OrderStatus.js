import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { styles } from './Style'
import OrderStatusContent from './OrderStatusContent';
import { COLORS, FONTS, TEXT } from "../../constants";
import CircularProgress from "react-native-circular-progress-indicator";

export const OrderStatus = (props) => {
    const [ListArray, setListArray] = React.useState([]);
    const [templistArray] = React.useState(ListArray);
    const [textValue, setTextValue] = React.useState("");
    const [isModal, setisModal] = React.useState(false);
    const [restrotitle, setRestroTitle] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [date, setDate] = React.useState(new Date())
    const [openPicker, setOpen] = React.useState(false)
    const [selectedDate, setNewdate] = React.useState('');
    const [LeftHours, setLeftHours] = React.useState('2');
    const onsearchFilterFunction = (text) => {
        setTextValue(text);
        const newData = ListArray.filter((datas) => {
            const itemData = datas.title.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData) > -1;
        });
        setListArray(newData);
        if (!text) {
            setListArray("");
            setListArray(templistArray);
        }
    };
    const onClear = () => {
        setTextValue("")
    };
    const addData = () => {
        setisModal(true);
        setTitle('');
        setRestroTitle('');
        setNewdate('')
    }

    const renderItem = (item) => {
        return (
            <View>
                <View style={styles.containerBox}>
                    <View style={styles.itembox}>
                        <View style={styles.titlebox}>
                            <View style={{ flex: .2 }}><Text style={styles.titleset1}>{item.item.title}</Text></View>
                            <View style={{ flex: .5 }}><Text style={styles.restrotitle}>{item.item.restroTitle}</Text></View>
                            <View style={{ flex: .5 }}><Text style={{ fontSize: 11, marginTop: 4 }}>{item.item.date}</Text></View>
                        </View>
                        <View style={{ flex: .5 }}>
                            <View style={{ flex: 1, }}><Text style={styles.subtitle}>12 Guests</Text></View>
                            <View style={{ flex: 1, }}>
                                <CircularProgress
                                    value={LeftHours}
                                    radius={22}
                                    activeStrokeColor={COLORS.RGB_255_255_255}
                                    inActiveStrokeColor={COLORS.RGB_9_93_49}
                                    inActiveStrokeOpacity={0.5}
                                    inActiveStrokeWidth={4}
                                    activeStrokeWidth={4}
                                    title={false}
                                    showProgressValue={false}
                                />
                                <Text style={styles.arrowCirle}>{LeftHours}</Text>
                                <Text style={styles.subtitle2}>Hours to go</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const ExitModel = () => {
        setisModal(false);
    }
    const _handleFocus = () => {

    }
    const _handleBlur = () => {

    }
    const _onChangeTextTitle = (text) => {
        setTitle(text)
    }
    const _onChangeTextrestroTitle = (text) => {
        setRestroTitle(text)
    }
    const openDate = () => {
        setOpen(true)
    }
    const onComfirm = (dates) => {
        // setDate(date)
        var d = dates.toString();
        var index = d.lastIndexOf(':') + 0
        var newdate = (d.substring(0, index))
        console.log(newdate);
        setNewdate(newdate)
        setOpen(false);

        // weird but seems to work with all dates 
        const pre = JSON.stringify(
            timeBetweenDates(Date.now(), (dates))
        );
        console.log(pre);
        // setLeftHours(pre)
        // const pre = document.getElementById("display");
        // setInterval(() => {


        // }, 1000);

        // minutes: date.getMinutes(),
        // seconds: date.getSeconds(),
    }
    const getYear = (datecal) => date.getFullYear() - 1970;
    const timeBetweenDates = (date1, date2) => {
        const datecal = new Date(date1 - date2);
        return {
            years: getYear(datecal),
            months: datecal.getMonth(),
            days: datecal.getDay(),
            hours: datecal.getHours(),
            minutes: datecal.getMinutes(),
            seconds: datecal.getSeconds(),
        }
    }

    // const pre = JSON.stringify(
    //     timeBetweenDates(Date.now(), selectedDate),
    //     0,
    //     2
    // );


    // const pre = document.getElementById("display");



    const onCancel = () => {
        setOpen(false)
    }

    const submitData = (data) => {
        let item = {
            "date": selectedDate,
            "geust": 12,
            "restroTitle": restrotitle,
            "time": "",
            "title": title
        }
        ListArray.push(item);
        console.log(ListArray)
        setisModal(false)

    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* <LoaderScreenOverLay show={isloaderStop} /> */}
                {/* <KeyboardAvoidView> */}
                <View style={styles.headerBox}>
                    <Text style={styles.centerText}>{TEXT.HEADERTITLE}</Text>
                </View>
                <OrderStatusContent
                    onsearchFilterFunction={onsearchFilterFunction}
                    onClear={onClear}
                    ListArray={ListArray}
                    textValue={textValue}
                    renderItem={renderItem}
                    addData={addData}
                    ExitModel={ExitModel}
                    isModal={isModal}
                    title={title}
                    restrotitle={restrotitle}
                    _handleFocus={_handleFocus}
                    _handleBlur={_handleBlur}
                    _onChangeTextTitle={_onChangeTextTitle}
                    _onChangeTextrestroTitle={_onChangeTextrestroTitle}
                    date={date}
                    openPicker={openPicker}
                    openDate={openDate}
                    onComfirm={onComfirm}
                    onCancel={onCancel}
                    maximumDate={1}
                    selectedDate={selectedDate}
                    submitData={submitData}

                />


                {/* </KeyboardAvoidView> */}
            </SafeAreaView>

        </>
    );
};
