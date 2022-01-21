import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS } from "../../constants";
import Modal from "react-native-modal";
import { scaleHeight, scaleWidth, dynamicSize } from "../../utils/responsive";
const { height } = Dimensions.get("window");

const BottomModal = ({
  ModalData,
  isVisible,
  disableModal,
  modalHeight = height / 1.5,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.bottomModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}
      swipeArea={20} // The height in pixels of the swipeable area, window height by default
      swipeThreshold={50}
    >
      <KeyboardAvoidingView
        enabled
        removeClippedSubviews={false}
        behavior={Platform.OS === "android" ? undefined : "position"}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.closeModalBtn}
          onPress={disableModal}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalContainer(null)}
          >
            <TouchableOpacity onPress={disableModal}>
              <View style={styles.line} />
            </TouchableOpacity>
            <ModalData />
          </TouchableOpacity>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default BottomModal;

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  closeModalBtn: {
    flex: 1,
  },
  line: {
    width: scaleWidth(37),
    height: scaleHeight(4),
    alignSelf: "center",
    backgroundColor: COLORS.RGB_173_173_173,
    marginVertical: scaleHeight(7),
    borderRadius: dynamicSize(2),
  },
  modalContainer: (modalHeight) => ({
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: dynamicSize(28),
    borderTopRightRadius: dynamicSize(28),
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: Platform.OS === "ios" ? scaleHeight(30) : scaleHeight(20),
    height: modalHeight,
  }),
});
