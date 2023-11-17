import { Text, View,StyleSheet,Image } from "react-native";
import { Post } from "@/types";
import { FontAwesome } from '@expo/vector-icons';
type PostListItemProps = {
    post: Post;
};

type FooterButtonProp = {
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name']
}

function FooterButton({text, icon}: FooterButtonProp){
    return (
        <View style={{flexDirection:'row'}}>
        <FontAwesome name={icon} size={16} color="gray" />
        <Text style={{marginLeft:5, color: 'gray', fontWeight: '500'}}>{text}</Text>
      </View>
    )
}

export function PostListItem({post}: PostListItemProps){
    
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Image source={{uri: post.author.image}} style={styles.userImage}/>
                <View>
                   <Text style={styles.userName}>{post.author.name}</Text>
                   <Text>{post.author.position}</Text>
                </View>
            </View>

            {/* Text content */}
            <Text style={styles.content}>{post.content}</Text>

            {/* Image content */}
            {post.image && (
            <Image source={{uri: post.image}} style={styles.postImage}/>
            )}

            {/* Footer */}
            <View style={styles.footer}>
                <FooterButton text="Like" icon="thumbs-o-up"/>
                <FooterButton text="Comment" icon="comment-o"/>
                <FooterButton text="Share" icon="share"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      maxWidth: 600,
      width: '100%',
      alignSelf: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    userImage: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: '600',
      marginBottom: 5,
    },
    position: {
      fontSize: 12,
      color: 'grey',
    },
    content: {
      margin: 10,
      marginTop: 0,
    },
    postImage: {
      width: '100%',
      aspectRatio: 1,
         
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: 'lightgray',
    },
    footerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footerButtonText: {
      marginLeft: 5,
      color: 'gray',
      fontWeight: '600',
    },
  });