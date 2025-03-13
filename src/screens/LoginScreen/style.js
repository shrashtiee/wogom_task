import { StyleSheet } from "react-native";
import colorConstant from "../../utility/colorConstant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colorConstant.WHITE_COLOR,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colorConstant.WHITE_COLOR,
  },
  loginButton: {
    backgroundColor: colorConstant.BUTTON_COLOR,
    padding: 12,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    alignSelf:'center',
    borderRadius:10,
    marginTop:10
  },
  loginButtonText: {
    color: colorConstant.WHITE_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
