import React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setSelectedNote(item);
          setCurrentPage('edit');
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, setSelectedNote, searchQuery, setSearchQuery }) => {
  const filteredNotes = noteList.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.desc.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari catatan..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => setCurrentPage('add')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredNotes}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            setCurrentPage={setCurrentPage}
            deleteNote={deleteNote}
            setSelectedNote={setSelectedNote}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  searchInput: {
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Home;
