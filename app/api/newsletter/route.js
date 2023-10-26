import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const res = await fetch(
    'https://bot.sempretecnologia.com.br/index.php/comercial/scd/news-blog',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'mz-integration': 'sempre'
      },
      body: JSON.stringify({
        email: body.mail,
        nome: body.name
      })
    }
  );

  return NextResponse.json(res);
}
