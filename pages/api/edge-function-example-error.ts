export const config = {
  runtime: 'edge',
};

function work() {
  throw new Error('Edge Test')
}

export default function handler(req, res) {
  work()

  res.status(200).json({ name: 'John Doe' })
}
