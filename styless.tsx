import { StyleSheet, } from 'react-native';
// Bileşenler için stiller
const ss = StyleSheet.create({
//Note Ekranı
 containerNote: {
    flex: 1,
  },
  inputNote: {
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
//Timer Ekranı
containerTimer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Ekranı kaplayacak şekilde
    backgroundColor: 'lightblue', // Arka plan rengi
  },
  timerView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerBox: {
    width: 300,
    borderWidth: 4,
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 30,
    fontWeight: '900',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    justifyContent: 'flex-start', // Ters sıralama için flex-start kullanıyoruz
    alignItems: 'center', // Dikey hizalama ayarı
  },
  noteContainer: {
    margin: 20,
    marginTop: 10,
  },
  noteText: {
    fontSize: 20,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonGroup: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
//Timer Or Not Ekranı 
 containerTN: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    bottom: 60,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  welcomeContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    width: '90%',
  },
  welcomeText: {
    marginTop:100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop:60,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    alignItems: 'center',
    margin:60,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 9,
  },
  buttonImage: {
    width: 110,
    height: 110,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 5,
  },
//login Ekranı
   containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputLogin: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoimg:{ 
    width: 65,
   height: 65,
   marginRight:100,
    resizeMode: 'contain',
     borderRadius: 555, 
     borderTopRightRadius: 950,
      borderBottomRightRadius: 555,
       borderTopLeftRadius: 555 
       },
  inputNote:{ 
    borderWidth: 1, 
    borderColor: 'gray', 
    padding: 10, 
    marginBottom: 10, 
    width: 300,
    height: 'auto',
    textAlignVertical: 'top', 
    flexWrap: 'wrap', // yeni satır için
  },
  //Logo Ekranı
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 155,
   height: 155,
   marginBottom:20,
    resizeMode: 'contain',
     borderRadius: 555, 
     borderTopRightRadius: 950,
      borderBottomRightRadius: 555,
       borderTopLeftRadius: 555 
  },
});

export default ss;