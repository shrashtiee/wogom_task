import { StyleSheet } from "react-native";
import colorConstant from "../../utility/colorConstant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colorConstant.WHITE_COLOR,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop:20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colorConstant.GREY_COLOR,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colorConstant.WHITE_COLOR,
  },
  addButton: {
    backgroundColor: colorConstant.BUTTON_COLOR,
    padding: 12,
    marginLeft: 10,
    borderRadius: 12,
    justifyContent:'center'

  },
  addButtonText: {
    color: colorConstant.WHITE_COLOR,
    fontWeight: "bold",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorConstant.WHITE_COLOR,
    borderRadius: 5,
    justifyContent: "space-between",
    borderColor:colorConstant.GREY_COLOR,
    borderWidth:0.5,
    elevation:3,
    marginVertical:5,
    padding:15
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  editInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colorConstant.BL,
  },
});

export default styles;
