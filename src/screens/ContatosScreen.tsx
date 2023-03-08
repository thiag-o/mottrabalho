import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider, List, Searchbar, Text } from "react-native-paper";
import Container from "../components/Container";

const ContatosScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button
          mode="text"
          icon="plus"
          onPress={() => {
            navigation.navigate("AddContato" as never);
          }}
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Adicionar Contato
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <List.Section title="Contatos">
        <List.Item
          title="First item"
          right={(props) => <List.Icon {...props} icon="edit" />}
        />
        <Divider />
        <List.Item title="Second item" />
      </List.Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContatosScreen;
