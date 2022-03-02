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
	const { SignIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function sendUserToSignUpScreen() {
		navigation.navigate("SignUp");
	}

	function loginOnAccount() {
		SignIn({ email, password });
	}

	return (
		<ScrollView showsHorizontalScrollIndicator="false">
		<SafeAreaView style={globalStyles.containerScreen}>
			<Image source={Logo} style={styles.logoHeader} />
			<SignInTitle text="Bem vindo.        Entre na sua conta" />

			<InputField
				label="Email"
				onChangeText={(newText) => setEmail(newText)}
				defaultValue={email}
				placeholder="Digite o seu email aqui..."
			/>

			<InputField
				label="Password"
				password={true}
				onChangeText={(newText) => setPassword(newText)}
				defaultValue={password}
				placeholder="Digite a sua senha aqui..."
			/>

			<TouchableOpacity>
				<Text style={styles.forgetPassword}>
					Esqueci minha senha e quero &nbsp;
					<Text style={styles.linkClickRef}>redefini-lá</Text>
				</Text>
			</TouchableOpacity>

			<Button
				onPress={loginOnAccount}
				text="Acessar conta"
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
					Ainda não possui uma conta ? &nbsp;
					<Text style={styles.linkClick} onPress={sendUserToSignUpScreen}>
						Clique aqui.
					</Text>
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
		</ScrollView>
	);
};

export default SignUpScreen;
