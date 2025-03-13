import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style"; 
import ScreenHeader from '../../components/ScreenHeader';

const ProfileView = ({ user, taskCount }) => {
  return (
    <View style={styles.container}>
        <ScreenHeader headerTitle = {"Task Details"}/>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user?.name || "N/A"}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email || "N/A"}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Total Tasks:</Text>
        <Text style={styles.value}>{taskCount}</Text>
      </View>
    </View>
  );
};

export default ProfileView;
