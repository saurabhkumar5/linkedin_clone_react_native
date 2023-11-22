import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import users from '../../assets/data/users.json';
import UserListItem from "../components/UserListItem";
import { useNavigation } from "expo-router";

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const navigation = useNavigation();

  useEffect(() => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }, [search]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search users"
        onChangeText={handleSearch}
        value={search}
      />
      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => <UserListItem user={item} />}
        keyExtractor={(item) => item.id.toString()} // Change 'id' to your unique identifier
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchBar: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ececec',
    borderRadius: 5,
  },
});
