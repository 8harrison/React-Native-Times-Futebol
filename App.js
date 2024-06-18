import { Text, SafeAreaView, FlatList, Pressable } from 'react-native';

import InfoTime from './components/InfoTime';
import { TIMES } from './Times';
import { styles } from './mainStryle';

let titulo = 'Times de futebol';
let competicao = 'Libertadores';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.competicao}>{competicao}</Text>
      </SafeAreaView>

      <FlatList
        style={styles.flat}
        showsVerticalScrollIndicator={false}
        data={TIMES}
        renderItem={({ item: { nome, nick, titulos, escudo, link } }) => (
          <InfoTime
            link={link}
            nome={nome}
            nick={nick}
            titulos={titulos}
            escudo={escudo}
          />
        )}
      />
    </SafeAreaView>
  );
}
