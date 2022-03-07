import React, { useState, useContext } from "react";

import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Logo from "../../assets/Head.png";

import styles from "./styles";
import globalStyles from "../../styles/";

import SignInTitle from "../../components/SignInAndUpTitle";
import InputField from "../../components/TextInput";
import Button from "../../components/Button";
import SeparatorSign from "../../components/SeparatorSign";

import AuthContext from "../../context/auth";

const SignUpScreen = ({ navigation }) => {
	const { SignUp } = useContext(AuthContext);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function sendUserBackToSignInScreen() {
		navigation.goBack();
	}

	function createNewUserAccount() {
		SignUp({ username, email, password });
	}

	return (
		<ScrollView
			showsHorizontalScrollIndicator="false"
			style={{ backgroundColor: "#fff" }}
		>
			<SafeAreaView style={globalStyles.containerScreen}>
				<Image source={Logo} style={styles.logoHeader} />
				<SignInTitle text="Crie uma nova conta para você." />

				<InputField
					label="Username"
					onChangeText={(newText) => setUsername(newText)}
					defaultValue={username}
					placeholder="Digite o seu nome aqui..."
				/>
				<InputField
					label="Email"
					onChangeText={(newText) => setEmail(newText)}
					defaultValue={email}
					placeholder="Digite o seu email aqui..."
				/>
				<InputField
					label="Password"
					onChangeText={(newText) => setPassword(newText)}
					defaultValue={password}
					password={true}
					placeholder="Digite a sua senha aqui..."
				/>

				<Button
					text="Criar conta"
					onPress={createNewUserAccount}
					backgroundColor="#4477Ff"
					iconName="adduser"
				/>

				<SeparatorSign />

				<Button
					text="Acessar pela conta do Google"
					backgroundColor="#FF2727"
					iconName="google"
				/>
				<Button
					text="Acessar pela conta do Github"
					backgroundColor="#101010"
					iconName="github"
				/>

				<TouchableOpacity>
					<Text style={styles.dontHaveAccount}>
						Você já possui uma conta ? &nbsp;
						<Text style={styles.linkClick} onPress={sendUserBackToSignInScreen}>
							Clique aqui.
						</Text>
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ScrollView>
	);
};

export default SignUpScreen;
