<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckGuru
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = auth()->user();

        if ($user->user_type === 'guru') {
            return $next($request);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'This page is limited for Guru',
                'data' => []
            ], 401);
        }

        return $next($request);
    }
}
