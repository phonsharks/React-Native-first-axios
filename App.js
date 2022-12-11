import {
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";
import axios from "axios";
import React, { Component } from "react";

//component içinde çalıştım
//worked in component
export default class App extends Component {
  /*bir yapı oluşturdum ki burada içinde veri atayım yada güncelleyebileyim*/
  /*I created a structure so that I can assign or update data in it*/
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /* ComponentDidMount() uzak depolar ile işlem yapma durumunda kullanılır.Burada veriyi çektim */
  /* ComponentDidMount() is used in case of operations with remote repositories. Here I pulled the data */
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    /* burada içine atacağım diziyi tanımladım daha doğrusu kullanmak üzere çağırdım */
    /* Here I have defined the array I will throw into it, or rather I have called it to use it */

    const { data } = this.state;
    /* burada Flatlist kullanımını özümsedim verileri çektiğimizde bu etiket içinde göstermekteyiz.
    Aynı zamanda FlatList özellikterini kullandım */
    /* Here I assimilated the use of Flatlist, when we pull the data, we show it in this tag.
    I also used the FlatList properties */
    return (
      <View style={{}}>
        <FlatList
          /* data parametresi içinde verilerimin geleceği diziyi tuttum */
          /* In the data parameter I kept the array where my data will come from */

          data={data}
          /* verileri string türünden yazdım */
          /* I wrote the data in string type */

          keyExtractor={(item) => item.id.toString()}
          /* renderItem ile tanımlanan durumumu yazdırdım. */
          /* I printed my status defined with renderItem */

          renderItem={({ item }) => (
            <View>
              <Text>{item.body  }</Text>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
}
