import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Row from './Row'


const renderItem = ({item}) => <Row {...item} />

const List = props => (
   <ScrollView>{props.items.map(item => <Row key={item.id} {...item}/>)}</ScrollView>
  
)

export default List;






