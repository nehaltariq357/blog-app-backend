import express, { Request, Response } from 'express';

export function healthCheck(req: Request, res: Response) {
  res.status(200).json({
    status: 'ok',
    message: 'API is healthy'
  });
}