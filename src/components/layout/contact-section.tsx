import { Box, Button, Field, Heading, HStack, Input, Text, Textarea, Stack, Container } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster"
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { generateUUID } from "three/src/math/MathUtils.js";
import ShaderCanvas from "../ui/shader-canvas";

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
    zip_code: string;
}

const ContactSection = () => {
    const [values, setValues] = useState<FormValues>({
        name: '',
        email: '',
        subject: '',
        message: '',
        zip_code: generateUUID()
    });

    const today = new Date()

    const handleChange =
        (field: keyof FormValues) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setValues((prev) => ({ ...prev, [field]: e.target.value }));
            };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (values.zip_code !== initialTokenRef.current) {
            toaster.create({
                description: "Message envoyé !",
                type: "error",
                closable: true
            })
            return;
        }

        if (!values.name || !values.email || !values.message) {
            toaster.create({
                description: 'Tous les champs obligatoires',
                type: "info",
                closable: true
            })
            return;
        }

        try {
            const resp = await fetch(import.meta.env.VITE_GETFORM_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new URLSearchParams(values as any), // encode en x-www-form-urlencoded
            });

            if (resp.ok) {
                toaster.create({
                    description: "Message envoyé !",
                    type: "success",
                    closable: true
                })
                setValues({ name: '', email: '', subject: '', message: '', zip_code: generateUUID() });
                initialTokenRef.current = values.zip_code;
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (err) {
            toaster.create({
                description: "Error lors de l'envoie du message",
                type: "error",
                closable: true
            })
        }
    };

    const initialTokenRef = useRef(values.zip_code);

    return (
        <>
            <Toaster />
            <Container as="section" mt={24} pt={90} maxW="5xl" position="relative" >


                <Box
                    top={0}
                    left={0}
                    position="absolute"
                    zIndex={-2}
                    p={4}
                    rounded={0}
                    w="full"
                    h="full"
                    overflow="hidden">
                    <ShaderCanvas />
                </Box>

                <Box backgroundColor={{ base: "white", _dark: "#09090b" }} pt={24} id="contact" maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg">
                    <Stack gap={4} mt={18} mb={10}>
                        <HStack align="end">
                            <Heading fontSize={{ base: "3xl", md: "5xl" }} >Contact</Heading>
                            <Box backgroundColor="orange.fg" w={3} h={3} rounded="full" />
                        </HStack>
                        <Text>
                            N'hésitez pas à me laisser un beau message
                        </Text>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={4} align="stretch">

                            <Field.Root required >
                                <Field.Label>Nom</Field.Label>
                                <Input
                                    placeholder="Votre nom"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                />
                            </Field.Root>
                            <Field.Root required>
                                <Field.Label>E‑mail</Field.Label>
                                <Input
                                    type="email"
                                    placeholder="votre@email.tld"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                            </Field.Root>
                            <Field.Root w={100} zIndex={-2} position="absolute">
                                <Field.Label>Code Postal</Field.Label>
                                <Input name="zip_code" value={values.zip_code} onChange={handleChange('zip_code')} autoComplete="new-password" />
                            </Field.Root>

                            <Box zIndex={-2} position="absolute" w={200} h={100} backgroundColor="#09090b" ></Box>

                            <Field.Root required>
                                <Field.Label>Sujet</Field.Label>
                                <Input
                                    placeholder="Objet du message"
                                    value={values.subject}
                                    onChange={handleChange('subject')}
                                />
                            </Field.Root>

                            <Field.Root required>
                                <Field.Label>Message</Field.Label>
                                <Textarea
                                    placeholder="Écrivez votre message ici..."
                                    rows={5}
                                    value={values.message}
                                    onChange={handleChange('message')}
                                />
                            </Field.Root>



                            <Button variant="outline" type="submit" width="full">
                                Envoyer
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <Text fontSize="xs" pb={4} pt={24} textAlign="center">
                    Copyright © {today.getFullYear()} Théau Nicolas. All rights reserved.
                </Text>
            </Container>
        </>
    )
}

export default ContactSection 