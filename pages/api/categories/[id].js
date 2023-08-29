import connectDB from '../../../utils/connectDB';
import Category from '../../../models/Category';

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
        const updatedCategory = await Category.findByIdAndUpdate(id, { name, image }, { new: true });
        res.status(200).json({ success: true, category: updatedCategory });
      } catch (error) {
        console.error('Error editing category:', error);
        res.status(500).json({ success: false, error: 'Failed to edit category' });
      }
      break;
    case 'DELETE':
      try {
        await Category.findByIdAndRemove(id);
        res.status(200).json({ success: true, message: 'Category deleted successfully' });
      } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ success: false, error: 'Failed to delete category' });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
