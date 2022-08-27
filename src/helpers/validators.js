const FILE_EXTENSION_REGEX = /\.(jpg|jpeg|png|gif)$/i;

export function validateImageCaption(caption) {
  if (caption.length > 60) {
    throw new Error('Image caption too long. Must be less than 60 characters');
  }
}

export const validateImageUpload = (file) => {
  if (!file) {
    throw new Error('Please select image');
  }

  if (!FILE_EXTENSION_REGEX.test(file.name)) {
    throw new Error('Supported file types: .jpg .jpeg .png .gif');
  }
};

export const validateContent = (offer, services, about, contacts) => {
  if (
    contacts.street === '' ||
    contacts.town === '' ||
    contacts.postCode === '' ||
    contacts.phone === ''
  ) {
    throw new Error('Cannot send empty fields');
  }

  if(contacts.street.length > 20) {
    throw new Error('Street too long. Max 20 characters');
  }

  if(contacts.town.length > 20) {
    throw new Error('Town too long. Max 20 characters');
  }

  if(contacts.postCode.length > 10) {
    throw new Error('Post Code too long. Max 10 characters');
  }

  if(contacts.phone.length > 20) {
    throw new Error('Phone too long. Max 20 characters');
  }

  if(offer.length < 200 || offer.length > 230) {
    throw new Error('Offer text must be between 200 and 230 characters long');
  }

  if(services.length < 180 || services.length > 230) {
    throw new Error('Services text must be between 180 and 230 characters long');
  }

  if(about.length < 800 || about.length > 1400) {
    throw new Error('About text must be between 800 and 840 characters long');
  }
  
};
