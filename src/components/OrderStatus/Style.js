import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS, TYPE } from "../../constants";
import {
    dynamicSize,
    normalizeFont,
    scaleHeight,
    scaleWidth,
} from "../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: scaleHeight(20),
        paddingHorizontal: scaleWidth(25),
        backgroundColor: COLORS.RGB_245_245_245,
        flex: 1

    },
    mainView: {
    },
    centerText: {
        color: COLORS.RGB_49_48_48,
        fontSize: normalizeFont(30),
        fontFamily: FONTS.CaveatBold
    },
    sideView: {
        width: scaleWidth(10),
        height: scaleWidth(10),
    },
    headerBox: {
        alignItems: 'center',
        marginTop: dynamicSize(51),


    },
    searchtext: {
        height: scaleHeight(45),
        lineHeight: dynamicSize(22),
        fontFamily: FONTS.WorkSansRegular,
        color: COLORS.RGB_46_46_46,
        fontSize: normalizeFont(15),
        marginTop: 5
    },
    searchBox: {
        flexDirection: "column",
        borderWidth: 0,
        marginHorizontal: dynamicSize("6"),
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
    },
    crossIcon: {
        alignItems: TYPE.CENTER,
        justifyContent: TYPE.CENTER,
        marginTop: dynamicSize(16),
    },
    friendTitle: {
        color: COLORS.RGB_46_46_46,
        fontSize: normalizeFont(16),
        fontFamily: FONTS.WorkSansMedium,
    },
    inputBox: {
        width: scaleWidth(229),
        alignSelf: "center",
        marginLeft: dynamicSize(20),
    },
    searchIcon: {
        alignItems: TYPE.CENTER,
        justifyContent: TYPE.CENTER,
        marginTop: dynamicSize(14),
    },
    searchSection: {
        flexDirection: "row",
        height: scaleHeight(55),
        backgroundColor: COLORS.RGB_248_248_248,
        borderRadius: 5,
        width: scaleWidth(325),
        marginTop: dynamicSize(30)
    },
    addbutton: {
        alignItems: 'center',
        height: dynamicSize(35),
        backgroundColor: COLORS.RGB_68_104_193,
        width: dynamicSize(60),
        left: dynamicSize(250),
        marginTop: 10,
        borderRadius: 20

    },
    addtext: {
        color: 'white', alignItems: 'center',
        alignSelf: 'center', marginTop: 10
    },
    containerBox: {
        marginTop: dynamicSize(20),
        height: dynamicSize(122),
        backgroundColor: COLORS.RGB_245_245_245,
        borderRadius: 6,
        shadowColor: COLORS.RGB_0_0_0_05,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 6,
        elevation: 5,
        margin: 5
    },
    itembox: { flexDirection: 'row', flex: 1, margin: 20 },
    titleset1: {
        fontSize: normalizeFont(11),
        color: COLORS.RGB_49_48_48,
        lineHeight: 14,
        fontFamily: FONTS.QuicksandBold,

    },
    subtitle: {
        fontSize: normalizeFont(11),
        fontFamily: FONTS.QuicksandMedium500

    },
    subtitle2: {
        color: COLORS.RGB_9_93_49,
        fontSize: normalizeFont(10),
        marginLeft: -5
    },
    horizontalLine: { borderBottomColor: 'black', borderBottomWidth: .5 },
    restrotitle: {
        fontFamily: FONTS.CaveatBold,
        fontSize: normalizeFont(22),
        lineHeight: dynamicSize(28),
        color: COLORS.RGB_0_0_0
    },
    titlebox: { flexDirection: 'column', flex: 1 },
    modal: {
        // flex: 1.5,
        backgroundColor: '#eef4fa', justifyContent: 'center', alignItems: 'center',
        // height: 300 ,
        width: ('100%'),
        height: dynamicSize(300)

    },
    textInput: {
        height: 40,
        alignSelf: 'flex-start',
        marginLeft: 10,
        width: dynamicSize(280)
        // width: width / 1.6,

    },
    pickerTitlebox: {
        backgroundColor: COLORS.RGB_68_104_193,
        padding: 10,
        width: dynamicSize(150),
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: dynamicSize(15),
        borderRadius: 6
    },
    pickertitle: {
        color: COLORS.RGB_244_244_244,
        fontSize: normalizeFont(15),
        marginLeft: 15
    },
    submitbtn: {
        backgroundColor: COLORS.RGB_68_104_193,
        padding: 10,
        margin: 20,
        alignItems: 'center',
        alignSelf: 'center',
        width: dynamicSize(250),
        borderRadius: 8,

    },
    arrowCirle: {
        position: TYPE.ABSOLUTE,
        color: COLORS.RGB_9_93_49,
        marginTop: 12,
        marginLeft: 16,
        alignItems: 'center'
    },
});
