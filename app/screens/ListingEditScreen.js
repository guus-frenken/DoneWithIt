import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {Form, FormField, FormPicker, SubmitButton} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: 'red',
    icon: 'apps',
  },
  {
    label: 'Clothing',
    value: 2,
    backgroundColor: 'green',
    icon: 'email',
  },
  {
    label: 'Cameras',
    value: 3,
    backgroundColor: 'blue',
    icon: 'lock',
  },
];

function ListingEditScreen() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{title: '', price: '', description: '', category: null}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Save" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
