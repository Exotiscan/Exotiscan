package com.example.exotiscanapp.ui.splash

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.example.exotiscanapp.R

class SplashFragment : Fragment(R.layout.fragment_splash_screen) {

    override fun onViewCreated(view: android.view.View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Navigasi ke HomeFragment setelah 2 detik
        Handler(Looper.getMainLooper()).postDelayed({
            findNavController().navigate(R.id.action_splashFragment_to_homeFragment)
        }, 2000) // 2 detik
    }
}