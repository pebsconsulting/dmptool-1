import ariatiseForm from '../../utils/ariatiseForm';
import { Tinymce } from '../../utils/tinymce';

$(() => {
  ariatiseForm({ selector: '#edit_guidance_form' });
  Tinymce.init({ selector: '.tinymce' });
});