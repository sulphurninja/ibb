import connectDB from '../../../utils/connectDB';
import SubCategory from '../../../models/SubCategory';

connectDB();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body: { name, image },
  } = req;

  switch (method) {
    case 'PUT':
      try {
        const updatedCategory = await SubCategory.findByIdAndUpdate(id, { name, image }, { new: true });
        res.status(200).json({ success: true, subcategory: updatedCategory });
      } catch (error) {
        console.error('Error editing subcategory:', error);
        res.status(500).json({ success: false, error: 'Failed to edit subcategory' });
      }
      break;
    case 'DELETE':
      try {
        await SubCategory.findByIdAndRemove(id);
        res.status(200).json({ success: true, message: 'SubCategory deleted successfully' });
      } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ success: false, error: 'Failed to delete category' });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
