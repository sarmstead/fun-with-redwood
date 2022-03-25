import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit, TextAreaField, FieldError, Label, FormError, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm();

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for contacting us!')
      formMethods.reset()
    }
  })

  const onSubmit = (data) => {
    console.log(data);
    create({ variables: { input: data } })
  };
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error" />

        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" validation={{ required: true }} errorClassName="error" />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">Email</Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            }
          }}
          errorClassName="error" />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">Message</Label>
        <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
