import { Text, View, Image, TouchableOpacity } from 'react-native';
import {styles} from './compoStyle'
import { Linking } from 'react-native';

export default function InfoTime({nome, nick, titulos, escudo, link}) {
  const redirect = (link) => {
  Linking.openURL(link);
};
  return (
    <TouchableOpacity style={styles.container} onPress={() => redirect(link)}>
      <View style={styles.smallContainer}>
        <Image source={escudo} style={styles.logo} />
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.nick}>{nick}</Text>
        </View>
      </View>
      <Text style={styles.titulos}>{titulos}</Text>
      <Image source={require('../assets/trofeu.png')} style={styles.trofeu}/>
    </TouchableOpacity>
  );
}


