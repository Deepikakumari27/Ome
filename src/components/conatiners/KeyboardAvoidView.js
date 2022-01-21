import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default function KeyboardAvoidView(props) {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.mainContainer, props.CustomStyle]}
      contentContainerStyle={props.ContentContainerStyle}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraHeight={props.extraHeight}
      enableAutomaticScroll={false}
      bounces={false}
    >
      {props.children}
    </KeyboardAwareScrollView>
  );
}
